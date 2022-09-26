export async function* mambuPaginate<L, R, D>({
    fn,
    limit = 50,
}: {
    fn: (options: { limit: number; offset: number }) => Promise<(D & { left: L }) | (D & { right: R[] })>
    limit?: number
}) {
    let offset = 0
    let page = 0
    let response: (D & { left: L }) | (D & { right: R[] })
    do {
        response = await fn({ limit, offset })

        if ('left' in response) {
            yield response
            return
        }
        offset = ++page * limit

        yield response
    } while (offset !== undefined && 'right' in response && response.right.length === limit)
}
