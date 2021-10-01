import { PrimaryColumn, Column, Entity, Index } from "typeorm";

@Entity()
export class Record {
  @PrimaryColumn("guid")
  id!: string;

  @Column({ nullable: false })
  @Index({ unique: true })
  guid!: string;

  @Column()
  wins?: number;

  @Column()
  losses?: number;
}
