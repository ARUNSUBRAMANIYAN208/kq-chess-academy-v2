import { useState, useEffect } from 'react';
import Papa from 'papaparse';

// Instructions for the user:
// 1. Create a Google Sheet with the following headers (exactly as written, case sensitive):
// id, title, date, time, location, description, format, rating, status, prizePool, prospectus
// 2. Go to File -> Share -> Publish to web
// 3. Choose "Entire Document" and "Comma-separated values (.csv)"
// 4. Click Publish and copy the link.
// 5. Replace the GOOGLE_SHEET_CSV_URL below with your copied link.

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSgJkrCSZXcoOvkzkpEqxe13tx7oWSnN1hiaHZqpX6UiN1F4eMWlLvaxlvBeUHsAWz05-mtyr9DKnN3/pub?output=csv'; // <-- Replace this with actual link

const useTournaments = () => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTournaments = () => {
            // If the URL is still the placeholder, just use fallback data instantly
            if (GOOGLE_SHEET_CSV_URL === 'YOUR_PUBLISHED_GOOGLE_SHEET_CSV_LINK_HERE') {
                setTournaments(getFallbackData());
                setLoading(false);
                return;
            }

            try {
                // Add a cache-busting timestamp to the URL
                const cacheBusterUrl = GOOGLE_SHEET_CSV_URL.includes('?')
                    ? `${GOOGLE_SHEET_CSV_URL}&t=${Date.now()}`
                    : `${GOOGLE_SHEET_CSV_URL}?t=${Date.now()}`;

                Papa.parse(cacheBusterUrl, {
                    download: true,
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        // Map the parsed CSV data to our expected application structure
                        const formattedData = results.data
                            .filter(row => row.id || row.title || row.name) // ensure we skip completely blank rows
                            .map((row, index) => ({
                                id: row.id || (index + 1).toString(),
                                // Handling both name and title mappings to be flexible
                                title: row.title || row.name || '',
                                name: row.name || row.title || '',
                                date: row.date || '',
                                time: row.time || '',
                                location: row.location || row.venue || '',
                                venue: row.venue || row.location || '',
                                description: row.description || '',
                                format: row.format || '',
                                rating: row.rating || '',
                                status: row.status || '',
                                prizePool: row.prizePool || '',
                                prospectus: row.prospectus || row.link || ''
                            }));

                        // If CSV is empty, fallback
                        if (formattedData.length === 0) {
                            setTournaments(getFallbackData());
                        } else {
                            setTournaments(formattedData);
                        }
                        setLoading(false);
                    },
                    error: (error) => {
                        console.error('Error parsing Google Sheets CSV:', error);
                        setError(error.message);
                        setLoading(false);
                        setTournaments(getFallbackData());
                    }
                });
            } catch (err) {
                console.error('Error fetching tournaments from Google Sheets:', err);
                setError(err.message);
                setLoading(false);
                setTournaments(getFallbackData());
            }
        };

        fetchTournaments();
    }, []);

    return { tournaments, loading, error };
};

// Fallback data shown while loading fails or link is not set
const getFallbackData = () => [
    {
        id: "1",
        title: "Golden Jubilee State Level Tournament",
        name: "Golden Jubilee State Level Tournament",
        date: "Aug 03, 2025",
        time: "09:00 AM",
        location: "P.S. Senior Secondary School, Mylapore",
        venue: "P.S. Senior Secondary School, Mylapore",
        description: "Tamilnadu State Level Chess Tournament organized for the Golden Jubilee Celebrations. FIDE Rated & Unrated events.",
        format: "Swiss System, 4 Games",
        rating: "FIDE Rated & Unrated",
        status: "Registration Open",
        prizePool: "₹10,000 top prize + Trophies"
    },
    {
        id: "2",
        title: "SRM IST State Level Tournament",
        name: "SRM IST State Level Tournament",
        date: "Sep 20, 2025",
        time: "09:00 AM",
        location: "SRM IST Ramapuram Campus",
        venue: "SRM IST Ramapuram Campus",
        description: "Tamilnadu State Level Chess Tournament hosted at SRM IST Faculty of Science and Humanities.",
        format: "Swiss System, 4 Games",
        rating: "FIDE Rated & Unrated Category",
        status: "Upcoming",
        prizePool: "₹10,000 top prize + Medals",
        prospectus: ""
    },
    {
        id: "0",
        title: "Inaugural Chess Championship 2024",
        name: "Inaugural Chess Championship 2024",
        date: "Dec 15, 2024",
        time: "10:00 AM",
        location: "KQ Chess Academy Main Center",
        venue: "KQ Chess Academy Main Center",
        description: "Our first major championship event featuring players from all branches.",
        format: "Swiss System, 5 Rounds",
        rating: "Unrated",
        status: "Completed",
        prizePool: "₹5,000 + Trophies",
        prospectus: "https://example.com/prospectus-2024.pdf"
    }
];

export default useTournaments;
