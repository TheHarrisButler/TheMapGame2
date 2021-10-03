import {
  PrimaryColumn,
  Column,
  Entity,
  Index,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { guid } from "../utils/guid";
@Entity()
export class Account extends BaseEntity {
  @PrimaryColumn("uuid", { nullable: false })
  @Index({ unique: true })
  guid!: string;

  @Column("varchar", { nullable: false, length: 255 })
  email!: string;

  @Column("varchar", { nullable: false, length: 255 })
  userName!: string;

  @Column("text", { nullable: false })
  password!: string;

  @BeforeInsert()
  addId() {
    this.guid = guid();
  }
}
