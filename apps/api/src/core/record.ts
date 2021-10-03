import { PrimaryColumn, Column, Entity, Index } from "typeorm";

@Entity()
export class Record {
  @PrimaryColumn("uuid", { nullable: false })
  @Index({ unique: true })
  guid!: string;

  @Column()
  wins?: number;

  @Column()
  losses?: number;
}
