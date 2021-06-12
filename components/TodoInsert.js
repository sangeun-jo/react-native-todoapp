import React, {useState} from 'react'; 
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => { 
    
    const [newTodoItem, setNewTodoItem] = useState('');  

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo); 
    }; 

    const addTodoHandler = () => {
        onAddTodo(newTodoItem); //사용자가 입력한 텍스트 값을 전달받아 목록에 추가 
        setNewTodoItem(''); // 입력창을 공백으로 초기화 
    };
    

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add an item!"
                placeholderTextColor={'#999'}
                onChangeText={todoInputHandler}
                value={newTodoItem}
                autoCorrect={false}>
            </TextInput>
            <View style={styles.button}>
                <Button title={'ADD'} onPress={addTodoHandler}/>
            </View>
        </View>
    ); 
}; 





const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center', 
    }, 
    input: {
        flex: 1, 
        padding: 20, 
        borderStartColor: '#bbb', 
        borderBottomWidth: 1, 
        fontSize: 24, 
        margin: 20, 
    }, 
    button: {
        padding: 20, 
        fontSize: 24, 
        backgroundColor: '#fff', 
        color: '#3143e8', 
        marginTop: 10, 
        marginRight: 10, 
    }, 
});

export default TodoInsert; 