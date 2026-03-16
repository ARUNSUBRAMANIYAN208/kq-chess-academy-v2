import { useState, useEffect } from 'react';
import Papa from 'papaparse';

// Instructions for the user:
// 1. Create a Google Sheet with the following headers (exactly as written, case sensitive):
// id, title, date, time, location, description, format, rating, status, prizePool, prospectus
// 2. Go to File -> Share -> Publish to web
// 3. Choose "Entire Document" and "Comma-separated values (.csv)"
// 4. Click Publish and copy the link.
// 5. Replace the GOOGLE_SHEET_CSV_URL below with your copied link.

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSgJkrCSZXcoOvkzkpEqxe13tx7oWSnN1hiaHZqpX6UiN1F4eMWlLvaxlvBeUHsAWz05-mtyr9DKnN3/pub?output=csv'; // <-- Main Tournament List
const REGISTRATIONS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vROZ-8q1naiGaRHXBJxm-CO2b_upgAHCIMK0JzJOqr-A-HtR_ffIdJgT8BBMYstOADy3-7jQG1gZeAf/pub?gid=0&single=true&output=csv'; // <-- OPTIONAL: Link to your "Registrations" sheet CSV to show dynamic counts

const useTournaments = () => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                // 1. Fetch Tournaments
                const tournamentPromise = new Promise((resolve, reject) => {
                    const cacheBuster = GOOGLE_SHEET_CSV_URL.includes('?') ? `&t=${Date.now()}` : `?t=${Date.now()}`;
                    Papa.parse(GOOGLE_SHEET_CSV_URL + cacheBuster, {
                        download: true,
                        header: true,
                        skipEmptyLines: true,
                        complete: resolve,
                        error: reject
                    });
                });

                // 2. Fetch Registrations (if URL provided)
                let registrationCounts = {};
                const normalize = (str) => String(str || "").trim().toLowerCase().replace(/\s+/g, ' ');

                if (REGISTRATIONS_CSV_URL) {
                    await new Promise((resolve) => {
                        const cacheBuster = REGISTRATIONS_CSV_URL.includes('?') ? `&t=${Date.now()}` : `?t=${Date.now()}`;
                        Papa.parse(REGISTRATIONS_CSV_URL + cacheBuster, {
                            download: true,
                            header: true,
                            skipEmptyLines: true,
                            complete: (results) => {
                                results.data.forEach(row => {
                                    const tName = normalize(row.tournamentName);
                                    if (tName) {
                                        registrationCounts[tName] = (registrationCounts[tName] || 0) + 1;
                                    }
                                });
                                resolve();
                            },
                            error: (err) => {
                                console.warn('Could not fetch registrations:', err);
                                resolve(); // continue without counts
                            }
                        });
                    });
                }

                const results = await tournamentPromise;
                const formattedData = results.data
                    .filter(row => row.id || row.title || row.name)
                    .map((row, index) => {
                        const originalName = row.name || row.title || '';
                        const normalizedName = normalize(originalName);
                        const registeredCount = registrationCounts[normalizedName] || 0;
                        const maxCapacity = parseInt(row.maxCapacity) || 300;

                        // Dynamically update status if full
                        let status = row.status || 'Upcoming';
                        if (registeredCount >= maxCapacity) {
                            status = 'Registration Full';
                        }

                        return {
                            id: row.id || (index + 1).toString(),
                            title: originalName,
                            name: originalName,
                            date: row.date || '',
                            time: row.time || '',
                            location: row.location || row.venue || '',
                            venue: row.venue || row.location || '',
                            description: row.description || '',
                            format: row.format || '',
                            rating: row.rating || '',
                            status: status,
                            prizePool: row.prizePool || '',
                            prospectus: row.prospectus || row.link || '',
                            maxCapacity: maxCapacity,
                            registeredCount: registeredCount,
                            remainingSpots: Math.max(0, maxCapacity - registeredCount)
                        };
                    });

                setTournaments(formattedData.length === 0 ? getFallbackData() : formattedData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
                setLoading(false);
                setTournaments(getFallbackData());
            }
        };

        if (GOOGLE_SHEET_CSV_URL === 'YOUR_PUBLISHED_GOOGLE_SHEET_CSV_LINK_HERE') {
            setTournaments(getFallbackData());
            setLoading(false);
        } else {
            fetchAllData();
        }
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
        prizePool: "₹10,000 top prize + Trophies",
        maxCapacity: 400,
        registeredCount: 350,
        remainingSpots: 50
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
        prospectus: "",
        maxCapacity: 400,
        registeredCount: 0,
        remainingSpots: 400
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
        prospectus: "https://example.com/prospectus-2024.pdf",
        maxCapacity: 400,
        registeredCount: 400,
        remainingSpots: 0
    }
];

export default useTournaments;
