import { User } from "../User";

export interface ConfigurationPaginationType {
    items: User[];
    itemsPerPage: number;
  }