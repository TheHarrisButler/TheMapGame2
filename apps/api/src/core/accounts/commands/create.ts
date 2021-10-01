import { getManager } from "typeorm";
import { Account } from "../..";
import { findAccountByPK } from "../reads";

//The account creation parameters
interface CreateParameters {
  //users chosen email
  email: string;
  //user chosen userName
  userName: string;
  //users chosen password
  password: string;
}

/**
 * Inserts a new account in the DB
 *
 * @param params - The account parameters the user inputed
 * @returns {Account} - returns the new account of the user
 */
export const create = async (params: CreateParameters): Promise<Account> => {
  try {
    //get Account tabel
    const tabel = getManager().getRepository(Account);

    //get the guid after insert
    const {
      identifiers: [primaryKey],
    } = await tabel.insert(params);

    const account = findAccountByPK(primaryKey as unknown as string);

    return account;
  } catch (error) {
    console.log(
      `
    This is an error on insert
    `,
      error
    );
    throw error;
  }
};
