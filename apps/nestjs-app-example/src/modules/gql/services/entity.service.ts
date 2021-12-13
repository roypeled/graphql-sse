import { Injectable } from '@nestjs/common';

export interface Entity {
  id: number
  dateCreated: Date
}

const randomDelay = async () => new Promise(res => setTimeout(res, Math.random()*3000));

@Injectable()
export class EntityService<T extends Entity, P extends Partial<T>> {

  protected entities: T[] = [];

  async create(dto: P) {
    const entity: T = {...dto, dateCreated: new Date(), id: this.entities.length + 1} as unknown as T;
    this.entities.unshift(entity);
    await randomDelay();
    return entity;
  }

  async getEntities(filter: Partial<T> = {}): Promise<T[]> {
    let entitiesBy = [...this.entities];
    Object.entries(filter).forEach(([key, value]) => {
      entitiesBy = entitiesBy.filter(entity => (value === undefined || entity[key] === value))
    });
    await randomDelay();
    return entitiesBy;
  }

  deleteBy(id: number) {
    this.entities = this.entities.filter(entity => entity.id === id);
  }

  populate(data: T[]) {
    this.entities = [...data]
  }
}



