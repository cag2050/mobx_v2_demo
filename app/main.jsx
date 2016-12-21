import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import Store from './store';

@observer
class App extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.store.decorated}</p>
                <input
                    defaultValue={this.props.store.name}
                    onChange={(event) => this.props.store.name = event.currentTarget.value}
                />
            </div>
        );
    }
}

const store1 = new Store();

ReactDOM.render(
    <App store={store1}/>,
    document.getElementById('div1')
);
