import { propertiesSeed } from '../../data/properties';
import type { ManagedProperty } from '../../types/properties';

export interface PropertiesRepository {
  list(): ManagedProperty[];
  getById(id: string): ManagedProperty | undefined;
}

class InMemoryPropertiesRepository implements PropertiesRepository {
  private readonly items = propertiesSeed;

  list() {
    return this.items;
  }

  getById(id: string) {
    return this.items.find((item) => item.id === id);
  }
}

export const propertiesRepository: PropertiesRepository = new InMemoryPropertiesRepository();
