import React from 'react';
import Home from '../../src/Home';
import renderer from 'react-test-renderer';
import { NavigationStackScreenOptions, NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';

test('Render successfully', () => {

    let navigationOptions: NavigationStackScreenOptions = {
        title: 'Home'
    }

    let props: any;

    let navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams> = {
        dispatch: props,
        goBack: props,
        dismiss: props,
        navigate: props,
        openDrawer: props,
        closeDrawer: props,
        toggleDrawer: props,
        getParam: props,
        setParams: props,
        addListener: props,
        push: props,
        replace: props,
        pop: props,
        popToTop: props,
        isFocused: props,
        state: props,
        dangerouslyGetParent: props

    }

    const component = renderer.create(
        <Home navigation={navigation} navigationOptions={navigationOptions} />
    );

    let generatedComponent = component.toJSON();
    expect(generatedComponent).toMatchSnapshot();
});