import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HeaderEnrichment = () => {
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This is an example of a possible phone number lookup
    // Make sure your mobile network injects MSISDN into the request
    fetchMobileNumber();
  }, []);

  const fetchMobileNumber = async () => {
    setLoading(true);
    setError(null);

    try {
      // Make the API request to your backend
      const response = await axios.get('https://MyProject.onrender.com/api/get-mobile-number', {
        // headers: {
        //   'x-msisdn': '+919867275944', // Simulate the MSISDN header from the carrier (example)
        // },
      });
      console.log("@@@@@@@@@@@@@@@@@@@@@@@98899999999999",response)

      // Store the mobile number fetched from backend
      setMobileNumber(response.data.phone);
    } catch (err) {
      console.error('API Error:', err);
      setError('Failed to fetch mobile number');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <View>
          {mobileNumber ? (
            <View>
              <Text style={styles.header}>Mobile Number:</Text>
              <Text>{mobileNumber}</Text>
            </View>
          ) : (
            <Text style={styles.error}>{error || 'No mobile number available'}</Text>
          )}
          <Button title="Retry" onPress={fetchMobileNumber} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  error: { color: 'red', marginTop: 20 },
});

export default HeaderEnrichment;

