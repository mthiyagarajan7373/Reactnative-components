type DeleteResponse = {
    status: boolean;
    message: string;
};
/**
 * Deletes a table from the local database.
 * @param tableName The name of the table to delete.
 */
export declare const deleteTableInDB: (tableName: string) => Promise<DeleteResponse>;
/**
 * Deletes a table from the local database.
 * @param tableName The name of the table to delete.
 */
export declare const deleteTableItemInDB: (tableName: string, id: number) => Promise<DeleteResponse>;
export {};
//# sourceMappingURL=DeleteDB.d.ts.map