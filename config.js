/**
 * ═══════════════════════════════════════════════════════════════════════════
 * WEBSITE CONFIGURATION FILE - EASY CUSTOMIZATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * INSTRUCTIONS FOR NON-TECHNICAL USERS:
 * ----------------------------------------
 * 1. Only edit the values inside the quotes "..." or '...'
 * 2. Do NOT change variable names (like "primaryColor", "title", etc.)
 * 3. Save the file after making changes
 * 4. Refresh your website to see the changes
 * 
 * TIP: Use Ctrl+F to search for what you want to change
 * 
 * NEED HELP? JOIN FOR SUPPORT:
 * https://discord.gg/heu5cEjnHA
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

const CONFIG = {
    // ═══════════════════════════════════════════════════════════════════════════
    // COLORS & THEME
    // ═══════════════════════════════════════════════════════════════════════════
    colors: {
        // Main accent color (buttons, highlights, etc.)
        primary: "#14dcbbff",

        // Background color for the main page
        background: "#f5f5f0",

        // Main text color
        text: "#000000",

        // Secondary text color (grey text)
        secondaryText: "#666666",

        // White color (used for cards, backgrounds)
        white: "#FFFFFF"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // GENERAL SETTINGS
    // ═══════════════════════════════════════════════════════════════════════════
    general: {
        // Website title (appears in browser tab)
        pageTitle: "Los Santos Roleplay - GTA V RP Server",

        // Logo text (top left corner) - Only used if logoImage is empty
        logoText: "SIREARP",

        // Logo image URL - Leave empty "" to use text logo instead
        logoImage: "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png",

        // Server IP address
        serverIp: "play.sirea.com",

        // Message shown when IP is copied
        copyIpMessage: "Server IP Copied!"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // TICKER/MARQUEE (Scrolling text below header)
    // ═══════════════════════════════════════════════════════════════════════════
    ticker: {
        enabled: true, // Set to false to hide ticker
        text: "WELCOME TO LOS SANTOS ROLEPLAY • NEW PLAYERS WELCOME • JOIN OUR DISCORD • SERVER ONLINE 24/7 • EXPERIENCE THE BEST ROLEPLAY", // Text that scrolls (will be repeated many times)
        speed: 2.5 // Animation speed (lower = slower, very slow for easy reading)
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // NAVIGATION MENU
    // ═══════════════════════════════════════════════════════════════════════════
    navbar: {
        links: [
            { text: "HOME", url: "#home" },
            { text: "ABOUT", url: "#about" },
            { text: "SERVER", url: "#server" },
            { text: "JOBS", url: "jobs.html", external: true },
            { text: "JOIN", url: "#join" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // HERO SECTION (Top of homepage)
    // ═══════════════════════════════════════════════════════════════════════════
    hero: {
        label: "WELCOME TO SERVER",
        title: "SIREA ROLEPLAY",
        description: "Experience the most immersive roleplay server in GTA V. Create your story, build your legacy, and live the life you choose in the streets of Los Santos.",

        // Buttons
        primaryButtonText: "JOIN NOW",
        primaryButtonLink: "#join",
        secondaryButtonText: "LEARN MORE",
        secondaryButtonLink: "#server",

        // Feature boxes (3 items)
        features: [
            { label: "INTELLIGENCE", value: "Advanced Systems" },
            { label: "COMMUNITY", value: "Active Players" },
            { label: "REALISM", value: "Authentic Experience" }
        ],

        // Character image URL
        characterImage: "https://images6.alphacoders.com/134/1344448.jpeg"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SHOWCASE SECTION (YouTube Video)
    // ═══════════════════════════════════════════════════════════════════════════
    showcase: {
        enabled: true, // Set to false to hide this section
        title: "Server Showcase",
        description: "Watch our official trailer to see what awaits you in Los Santos.",
        // IMPORTANT: Use a REAL YouTube video URL that allows embedding
        // Format options:
        // - https://www.youtube.com/watch?v=VIDEO_ID
        // - https://youtu.be/VIDEO_ID
        // Replace VIDEO_ID with your actual video ID (11 characters)
        videoUrl: "https://youtu.be/CDG_y0nR3Qg?list=RDCDG_y0nR3Qg" // Enter your YouTube video URL here
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SOCIAL MEDIA SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    social: {
        label: "STAY CONNECTED",
        title: "Join Our Community",

        cards: [
            {
                name: "DISCORD",
                buttonText: "Join",
                link: "https://discord.gg/yourserver"
            },
            {
                name: "TIKTOK",
                buttonText: "Follow",
                link: "https://tiktok.com/@yourserver"
            },
            {
                name: "INSTAGRAM",
                buttonText: "Follow",
                link: "https://instagram.com/yourserver"
            },
            {
                name: "YOUTUBE",
                buttonText: "Subscribe",
                link: "https://youtube.com/@yourserver"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SERVER STATUS SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    status: {
        label: "SERVER STATUS",
        value: "ONLINE",
        playersLabel: "Players:",
        playersValue: "2,847 / 3,000",
        queueLabel: "Queue:",
        queueValue: "12",

        cards: [
            { number: "5,234", text: "Registered Players" },
            { number: "24/7", text: "Uptime" },
            { number: "150+", text: "Custom Features" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ABOUT SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    about: {
        label: "WELCOME TO",
        title: "LOS SANTOS ROLEPLAY",
        paragraph1: "Los Santos Roleplay is a premium GTA V roleplay server offering an authentic and immersive experience. Our server features advanced systems, custom scripts, and a dedicated community of roleplayers committed to creating realistic stories and memorable moments.",
        paragraph2: "Join thousands of players in a fully immersive roleplay environment where every decision matters. From starting as a civilian to becoming a successful business owner, police officer, or criminal mastermind - your story is yours to write.",

        stats: [
            { number: "5,234", text: "Players" },
            { number: "150+", text: "Features" },
            { number: "24/7", text: "Online" }
        ],

        boxTitle: "Why Choose Us?",
        boxList: [
            "Zero lag experience with optimized performance",
            "Active development with weekly updates",
            "Professional staff available 24/7",
            "Fair economy and balanced gameplay",
            "Dedicated community and events"
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // HOW TO JOIN SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    howto: {
        subtitle: "GET STARTED",
        title: "How to Join",
        steps: [
            {
                number: "1",
                title: "Join Discord",
                description: "Join our Discord server to get started. Read the rules and guidelines before applying."
            },
            {
                number: "2",
                title: "Submit Application",
                description: "Fill out our application form with your character backstory. Staff will review within 24 hours."
            },
            {
                number: "3",
                title: "Download Resources",
                description: "Download FiveM, server files, and required mods from our Discord server."
            },
            {
                number: "4",
                title: "Start Playing",
                description: "Connect using our IP address and start your journey in Los Santos. Welcome!"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SERVER FEATURES SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    features: {
        title: "Server Features",
        subtitle: "Everything you need for the ultimate roleplay experience",

        mainFeature: {
            title: "Custom Vehicles",
            description: "Hundreds of custom vehicles with realistic handling, tuning options, and unique modifications."
        },

        list: [
            { title: "Job System", description: "Diverse job opportunities from police to business owner." },
            { title: "Housing", description: "Buy and customize properties in Los Santos." },
            { title: "Legal System", description: "Realistic courts, lawyers, and justice system." },
            { title: "Economy", description: "Balanced economic systems and businesses." },
            { title: "Criminal Activity", description: "Realistic crime systems and organizations." }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // GALLERY SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    gallery: {
        label: "GALLERY",
        title: "See Los Santos in Action",
        description: "Explore our server through community screenshots and videos showcasing the best moments.",

        // Gallery images (5 images recommended for best layout)
        images: [
            { src: "https://wallpapercave.com/wp/wp13280859.jpg", label: "Downtown Los Santos" },
            { src: "https://wallpapercave.com/wp/wp13280859.jpg", label: "City Life" },
            { src: "https://wallpapercave.com/wp/wp13280859.jpg", label: "Roleplay Scene" },
            { src: "https://wallpapercave.com/wp/wp13280859.jpg", label: "Action" },
            { src: "https://wallpapercave.com/wp/wp13280859.jpg", label: "Community" }
        ],

        // Featured image on the left side
        leftImage: "https://wallpapercave.com/wp/wp13280859.jpg"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // NEWS SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    news: {
        date: "January 2025",
        title: "Los Santos Chronicle",

        mainArticle: {
            image: "https://wallpapercave.com/wp/wp13280859.jpg",
            badge: "BREAKING",
            category: "Server Update",
            headline: "New Roleplay Features Launch Across Los Santos",
            excerpt: "The city of Los Santos has seen unprecedented growth with over 5,000 registered players now calling it home. New economic systems, enhanced job opportunities, and improved law enforcement protocols have transformed the roleplay experience.",
            author: "By Server Staff",
            time: "2 hours ago"
        },

        sideArticles: [
            {
                image: "https://wallpapercave.com/wp/wp13280859.jpg",
                category: "Community",
                headline: "Weekly Events Schedule",
                time: "5 hours ago"
            },
            {
                image: "https://wallpapercave.com/wp/wp13280859.jpg",
                category: "Update",
                headline: "Server Maintenance Complete",
                time: "1 day ago"
            },
            {
                category: "Announcement",
                headline: "New Player Applications Open",
                time: "3 days ago"
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // INFO SECTION
    // ═══════════════════════════════════════════════════════════════════════════
    info: {
        leftBlock: {
            label: "TECHNOLOGY",
            text: "Advanced server infrastructure with custom scripts, optimized performance, and cutting-edge systems that deliver the smoothest roleplay experience possible. Our dedicated development team continuously updates and improves the server to provide the best gameplay."
        },
        rightBlock: {
            label: "COMMUNITY",
            text: "A thriving community of dedicated roleplayers, active staff, and passionate players working together to create unforgettable stories and experiences. Join thousands of players who call Los Santos their home."
        }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // JOIN SECTION (Call to Action)
    // ═══════════════════════════════════════════════════════════════════════════
    join: {
        title: "Ready to Start Your Story?",
        text: "Join thousands of players in the most immersive roleplay experience. Your adventure in Los Santos starts here.",
        discordButton: "Join Discord",
        discordLink: "https://discord.gg/yourserver",
        infoButton: "View Server Info",
        infoLink: "#server"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // FOOTER
    // ═══════════════════════════════════════════════════════════════════════════
    footer: {
        logo: "LOS SANTOS RP",
        text: "The ultimate GTA V roleplay experience",
        copyright: "© 2025 Los Santos Roleplay",
        links: [
            { text: "Discord", url: "https://discord.gg/yourserver" },
            { text: "X", url: "https://x.com/yourserver" },
            { text: "Instagram", url: "https://instagram.com/yourserver" }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // JOBS PAGE CONFIGURATION
    // ═══════════════════════════════════════════════════════════════════════════
    jobs: {
        enabled: true, // Set to false to hide jobs page
        // Hero Section
        hero: {
            label: "CAREER OPPORTUNITIES",
            title: "AVAILABLE JOBS",
            description: "Choose your path in Los Santos. From legal businesses to underground operations, your career awaits. Each job offers unique opportunities and challenges."
        },

        // Legal Jobs Category
        legal: {
            badge: "LEGAL",
            title: "LEGAL CAREERS",
            description: "Honest work for honest pay. Build your reputation in the city.",

            jobs: [
                {
                    title: "POLICE OFFICER",
                    salary: "$2,500 - $5,000/hr",
                    description: "Protect and serve the citizens of Los Santos. Patrol the streets, respond to emergencies, and maintain law and order.",
                    image: "https://i.redd.it/human-police-officers-v0-2u5ptlmx94pe1.jpg?width=1012&format=pjpg&auto=webp&s=8a04c56b5827c70352e6ce4b0f3f0943e5121acd",
                    tags: ["Level 10+", "Clean Record", "Medium Diff", "15-30 Active"]
                },
                {
                    title: "PARAMEDIC",
                    salary: "$2,000 - $4,500/hr",
                    description: "Save lives across the city. Respond to medical emergencies and provide critical care to injured citizens.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=EMS",
                    tags: ["Level 5+", "Medical Training", "Medium Diff", "10-20 Active"]
                },
                {
                    title: "TAXI DRIVER",
                    salary: "$1,500 - $3,000/hr",
                    description: "Transport passengers around Los Santos. Meet new people and earn tips while exploring the city.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=TAXI",
                    tags: ["Level 1+", "Driver's License", "Easy Diff", "5-15 Active"]
                },
                {
                    title: "MECHANIC",
                    salary: "$1,800 - $4,000/hr",
                    description: "Repair and customize vehicles. Run your own garage or work for established shops.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=MECH",
                    tags: ["Level 3+", "Mech Skills", "Easy Diff", "8-18 Active"]
                }
            ]
        },

        // Illegal Jobs Category
        illegal: {
            badge: "ILLEGAL",
            title: "UNDERGROUND",
            description: "High risk, high reward. The criminal underworld awaits.",

            jobs: [
                {
                    title: "DRUG DEALER",
                    salary: "$3,000 - $8,000/hr",
                    description: "Distribute illegal substances across the city. Avoid law enforcement and rival gangs.",
                    image: "https://placehold.co/600x400/ffffff/000000?text=DRUGS",
                    tags: ["Level 15+", "Gang Affiliation", "Hard Diff", "High Risk"]
                },
                {
                    title: "ARMS DEALER",
                    salary: "$4,000 - $10,000/hr",
                    description: "Supply weapons to the criminal underworld. Manage inventory and negotiate deals.",
                    image: "https://placehold.co/600x400/ffffff/000000?text=ARMS",
                    tags: ["Level 20+", "Connections", "Very Hard", "Extreme Risk"]
                },
                {
                    title: "HACKER",
                    salary: "$2,500 - $7,000/hr",
                    description: "Breach security systems, steal data, and disable alarms. Your skills are in high demand.",
                    image: "https://placehold.co/600x400/ffffff/000000?text=HACKER",
                    tags: ["Level 12+", "Tech Skills", "Hard Diff", "High Risk"]
                },
                {
                    title: "HITMAN",
                    salary: "$5,000 - $15,000/contract",
                    description: "Execute contracts with precision. Eliminate targets and disappear without a trace.",
                    image: "https://placehold.co/600x400/ffffff/000000?text=HITMAN",
                    tags: ["Level 25+", "Reputation", "Extreme Diff", "Extreme Risk"]
                }
            ]
        },

        // Services Jobs Category
        services: {
            badge: "SERVICES",
            title: "SERVICE INDUSTRY",
            description: "Support the city's economy with essential services.",

            jobs: [
                {
                    title: "DELIVERY DRIVER",
                    salary: "$1,200 - $2,500/hr",
                    description: "Transport goods across the city. Fast deliveries mean better tips and higher earnings.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=DELIVERY",
                    tags: ["Level 1+", "Vehicle", "Easy Diff", "10-25 Active"]
                },
                {
                    title: "REAL ESTATE AGENT",
                    salary: "$2,000 - $6,000/sale",
                    description: "Help players find their dream properties. Earn commission on every successful sale.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=ESTATE",
                    tags: ["Level 8+", "License", "Medium Diff", "5-12 Active"]
                },
                {
                    title: "LAWYER",
                    salary: "$3,000 - $8,000/case",
                    description: "Defend clients in court. Your legal expertise can mean freedom or prison time.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=LAWYER",
                    tags: ["Level 18+", "Law Degree", "Hard Diff", "3-8 Active"]
                },
                {
                    title: "NEWS REPORTER",
                    salary: "$1,800 - $4,000/hr",
                    description: "Cover breaking news and events. Interview citizens and broadcast live from the scene.",
                    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=NEWS",
                    tags: ["Level 5+", "Comm Skills", "Medium Diff", "4-10 Active"]
                }
            ]
        },

        // CTA Section
        cta: {
            title: "READY TO START YOUR CAREER?",
            description: "Join Los Santos Roleplay today and begin your journey",
            buttonText: "JOIN NOW",
            buttonLink: "index.html#join"
        }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SERVER MANAGEMENT (Staff Members)
    // ═══════════════════════════════════════════════════════════════════════════
    staff: {
        enabled: true, // Set to false to hide staff page
        title: "SERVER MANAGEMENT",
        subtitle: "Meet the Team",
        description: "The dedicated team behind Los Santos Roleplay, working around the clock to ensure the best experience for our community.",
        
        // Staff members - Easy to add/remove
        members: [
            {
                name: "Sirea",
                role: "Server Owner",
                image: "https://i.pinimg.com/736x/63/e6/7c/63e67c6f0eeb94087faafb857f8bcc4d.jpg",
                isOwner: true // Special badge for owner
            },
            {
                name: "Sirea DEV",
                role: "Head Admin",
                image: "https://i.pinimg.com/736x/99/87/c9/9987c98624fa3d9bcd1178b6d66cf86f.jpg",
                isOwner: false
            },
            {
                name: "Mike ",
                role: "Senior Admin",
                image: "https://i.pinimg.com/736x/68/6c/3f/686c3f51f78a2611e307da692a14adc2.jpg",
                isOwner: false
            },
            {
                name: "Sarah",
                role: "Community Manager",
                image: "https://i.pinimg.com/736x/8f/5c/80/8f5c80deff95be59419eeb887296e323.jpg",
                isOwner: false
            },
            {
                name: "Alex",
                role: "Developer",
                image: "https://i.pinimg.com/1200x/3c/5a/08/3c5a084280e215681fa0862644864f89.jpg",
                isOwner: false
            },
            {
                name: "Emma",
                role: "Moderator",
                image: "https://i.pinimg.com/736x/4a/fc/da/4afcdabbf3e620b3a2887fb30135982a.jpg",
                isOwner: false
            }
        ]
    }
};
