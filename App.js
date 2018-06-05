/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules,
} from 'react-native';

var MyModule = NativeModules.MyModule;

const instructions = Platform.select({
    ios: 'React Native与原生交互的三种方式 Callback,Promise',
    android: 'React Native与原生交互的三种方式 Callback,Promise',
});

type Props = {};
export default class App extends Component<Props> {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Text style={{marginTop: 20}}
                      onPress={() => this.callBackEvent()}
                >点击原生+回调</Text>
                <Text style={{marginTop:20}}
                      onPress={()=>this.promisesEvent()}
                >Promises</Text>

                <Text>{'参考：https://www.jianshu.com/p/41dd77a83c13 \n https://blog.csdn.net/jiangbo_phd/article/details/55046347'}</Text>
            </View>
        );
    }

    callBackEvent() {
        MyModule.testCallbackEvent(('RN->原生数据'),(error,events) =>{
            if (error){
                console.error(error)
            } else {
                alert(events)
            }
        })
    }

    async promisesEvent(){
        MyModule.testPromisesEvent().then((events)=>{
            alert(events+1111)
        }).catch((e)=>{
            console.error(e);
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
