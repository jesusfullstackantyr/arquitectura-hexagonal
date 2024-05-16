
export const IF_NOT_FOUND_EXCEPTION_THROW = (foundRecord:any,customMessage:string) => {
    if (!foundRecord) {
        throw({
            HTTP_STATUS:404,
            message:customMessage
        });
    }
}