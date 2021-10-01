import { getManager } from "typeorm";
import { Account } from "../..";

/**
 * Find a user account by their primary key
 * @param {string} pk
 * @returns {Account} the account for the given primary key
 */
export const findAccountByPK = async (pk: string): Promise<Account> => {
  const tabel = getManager().getRepository(Account);
  try {
    return await tabel.findOneOrFail(pk);
  } catch (error) {
    console.log(
      `
     Error on Find by PK 
    `,
      error
    );
    throw error;
  }
};
