import components from '../components';
import parsers from '../parsers';
import alias from './alias';
import manager from './manager';
import FormCreateFactory from '@form-create/core';
import makers from './maker';
import '../style/index.css';
import extendApi from './api';

function install(FormCreate) {
    FormCreate.componentAlias(alias);

    components.forEach(component => {
        FormCreate.component(component.name, component);
    });

    parsers.forEach((parser) => {
        FormCreate.parser(parser);
    });

    Object.keys(makers).forEach(name => {
        FormCreate.maker[name] = makers[name];
    });
}

export default function ivuFormCreate() {
    return FormCreateFactory({
        ui: `${process.env.UI}`,
        version: `${process.env.VERSION}`,
        manager,
        install,
        extendApi,
        attrs: {
            normal: ['col', 'wrap'],
            array: ['className'],
            key: ['title', 'info'],
        }
    });
}
