import * as _ from 'lodash';

export class GridColumn {
  heading: string;
  name: string;
  sorting: boolean = true;
  width: string;

  constructor(options?: any) {
    if (!_.isUndefined(options)) {
      for (let option in options) {
        this[option] = options[option];
      }
    }
  }

  renderHeading(): string {
    return this.heading ? this.heading : this.name;
  }

  renderCell(data: any): string {
    return <string>_.get(data, this.name);
  }

  isSortingAllowed(): boolean {
    return _.isUndefined(this.sorting) || this.sorting;
  }
}