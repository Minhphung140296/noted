import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Note from './Note';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val} 
            deleteMethod={() => this.noteDelete(key)} />
        });


        return (
            <View style={styles.Container}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>- Noder -</Text>
                </View>
                <ScrollView style={styles.scrollViewContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput style={styles.TextInput}
                        placeholder='note'
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                    >
                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + (d.getDate()),
                'Note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' });
        }
    }

    noteDelete(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#add'
    },
    textHeader: {
        color: 'white',
        fontSize: 18,
        padding: 18
    },
    scrollViewContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    TextInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
})