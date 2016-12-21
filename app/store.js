/**
 * Created by chenanguo on 16/12/21.
 */
import { observable,computed } from 'mobx';

class Store {
    @observable name = 'jeff';

    @computed get decorated() {
        return `${this.name} is awesome!`;
    }
}

export default Store;