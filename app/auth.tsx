import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthScreen() {
    const [hasBiometrics, setHasBiometrics] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    return (
        <LinearGradient colors={['#4CAF50', '#2E7D32']}>
            <View>
                <View>
                    <Ionicons name='medical' size={80} color='white' />
                </View>
                <Text>Medimate</Text>
                <Text>Your Personal Medication Reminder </Text>

                <View>
                    <Text>Welcome Back!</Text>
                    <Text>
                        {hasBiometrics ? 'Use face ID/Touch ID or PIN to access your medications' : 'Enter your PIN to access your medications'}
                    </Text>
                    <TouchableOpacity>
                        <Ionicons name={
                            hasBiometrics ? 'finger-print-outline' : 'keypad-outline'
                        } size={24} color='white' />


                        <Text>
                            {isAuthenticating ? 'Verifying...' : hasBiometrics ? 'Authenticate' : 'Enter PIN'}
                        </Text>
                    </TouchableOpacity>

                </View>


            </View>

        </LinearGradient>
    )
}
