/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'uixhgitbpolrsjazwtep.supabase.co',
            }
        ]
    }
}

module.exports = nextConfig
