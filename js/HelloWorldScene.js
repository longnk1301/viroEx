'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
    ViroScene,
    ViroText,
    Viro360Image,
    ViroBox,
    ViroMaterials
} from 'react-viro';

export default class HelloWorldScene extends Component {

    constructor() {
        super();
        this.state = {
            text: 'Hello'
        } // Set initial state here

        this._onBoxHover = this._onBoxHover.bind(this);
        this._showHelloBeachScene = this._showHelloBeachScene.bind(this);
    }

    _onBoxHover(isHovering) {
        let text = isHovering ? "The Nun Film!" : "Hello!";
        this.setState({
            text
        });
    }

    _showHelloBeachScene() {
        this.props.sceneNavigator.push({scene:require("./HelloBeachScene.js")});
    }

    render() {
        return (
        <ViroScene>
            <Viro360Image source={require('./res/guadalupe_360.jpg')} />
            <ViroText text={this.state.text} width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
            <ViroBox position={[0, -1, -2]} scale={[.5,.5,.2]} materials={["grid"]} onHover={this._onBoxHover} onClick={this._showHelloBeachScene} />
        </ViroScene>
        );
    }
}

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/c8a22bc-grid_bg.jpg'),
    },
});

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 40,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',  
    },
});

module.exports = HelloWorldScene;
