module.exports = {
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, s-maxage=1, stale-while-revalidate=59',
    },
  ]
}
