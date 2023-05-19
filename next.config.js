/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: "/:path*",
            headers: [
                {
                    key: "X-Robots-Tag",
                    value: "noindex",
                },
            ],
        }];
    }
}

module.exports = nextConfig
