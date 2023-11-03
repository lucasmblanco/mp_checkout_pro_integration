/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/699122/pexels-photo-699122.jpeg',
            }
        ]
    }
}

module.exports = nextConfig
