// Centralized configuration for the frontend

export const config = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',

    // Derived URLs
    get apiDocsUrl() {
        return `${this.apiUrl}/docs`;
    },

    // Site info
    siteName: 'The Oracle Engine',
    siteDescription: 'Fortune Telling API',
    supportEmail: 'support@oracle-engine.com',
};
