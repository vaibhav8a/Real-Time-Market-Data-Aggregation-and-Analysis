import { db } from '../config/firebase.js';

// Alert service for managing price alerts
export const createAlert = async (userId, alertData) => {
    try {
        const alertRef = db.collection('users').doc(userId).collection('alerts');
        const newAlert = {
            symbol: alertData.symbol,
            type: alertData.type, // 'price_above', 'price_below'
            price: alertData.price,
            isActive: true,
            createdAt: new Date(),
            triggeredAt: null,
        };
        const docRef = await alertRef.add(newAlert);
        return { id: docRef.id, ...newAlert };
    } catch (error) {
        console.error('Error creating alert:', error.message);
        throw error;
    }
};

export const getUserAlerts = async (userId) => {
    try {
        const alertsRef = db.collection('users').doc(userId).collection('alerts');
        const snapshot = await alertsRef.where('isActive', '==', true).get();

        const alerts = [];
        snapshot.forEach(doc => {
            alerts.push({ id: doc.id, ...doc.data() });
        });
        return alerts;
    } catch (error) {
        console.error('Error fetching user alerts:', error.message);
        throw error;
    }
};

export const updateAlert = async (userId, alertId, updateData) => {
    try {
        const alertRef = db
            .collection('users')
            .doc(userId)
            .collection('alerts')
            .doc(alertId);

        await alertRef.update(updateData);
        const doc = await alertRef.get();
        return { id: doc.id, ...doc.data() };
    } catch (error) {
        console.error('Error updating alert:', error.message);
        throw error;
    }
};

export const deleteAlert = async (userId, alertId) => {
    try {
        const alertRef = db
            .collection('users')
            .doc(userId)
            .collection('alerts')
            .doc(alertId);

        await alertRef.delete();
        return { success: true, alertId };
    } catch (error) {
        console.error('Error deleting alert:', error.message);
        throw error;
    }
};

export const triggerAlert = async (userId, alertId) => {
    try {
        const alertRef = db
            .collection('users')
            .doc(userId)
            .collection('alerts')
            .doc(alertId);

        await alertRef.update({
            triggeredAt: new Date(),
            isActive: false,
        });
        return { success: true, alertId };
    } catch (error) {
        console.error('Error triggering alert:', error.message);
        throw error;
    }
};

export default {
    createAlert,
    getUserAlerts,
    updateAlert,
    deleteAlert,
    triggerAlert,
};
