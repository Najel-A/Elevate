import React, {useState, useEffect, useRef} from 'react';
import {View, ActivityIndicator, FlatList, TouchableOpacity, Text} from 'react-native';
import QuestCard from './QuestsCard';

const QuestsView = () => {
    return(
        <QuestCard/>
    );
}

export default QuestsView;