
export const paginate = (perPage:number,currentPage:number,totalRecords:number) => {

    const totalPages         = Math.ceil(totalRecords / perPage ); 

    const hasNextPage = currentPage < totalPages;
    const hasPreviousPage = currentPage > 1;

    const nextPage:number|null = hasNextPage ? currentPage + 1 : null;
    const lastPage:number|null = hasPreviousPage ? currentPage - 1 : null;

    return {
        total_records:totalRecords,
        current_page:currentPage,
        records_per_page:perPage,
        last_page:lastPage,
        next_page : nextPage
    }
};