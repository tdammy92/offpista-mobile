import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  Bell,
  Camera,
  HelpCircle,
  LogOut,
  Settings,
} from 'lucide-react-native';
import styles from './styles';
import useColors from '@src/hooks/useColors';
import { hp } from '@src/themes/dimensions';

const ProfileScreen = () => {
  const colors = useColors();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {};
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarLarge}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
            style={{ height: '100%', width: '100%', borderRadius: 50 }}
          />

          <View style={{ position: 'absolute', bottom: 0, right: -5 }}>
            <Camera
              size={hp(28)}
              fill={colors.dark}
              stroke={colors.primary100}
            />
          </View>
        </View>
        <Text style={styles.profileName}>Brandon Mark</Text>
        <Text style={styles.profileEmail}>brandon.mark@offpista.com</Text>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Settings size={20} color={colors.light} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Bell size={20} color={colors.light} />
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <HelpCircle size={20} color={colors.light} />
            <Text style={styles.menuItemText}>Help & Support</Text>
          </View>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, styles.signOutItem]}
          onPress={handleSignOut}
          disabled={loading}
        >
          <View style={styles.menuItemLeft}>
            <LogOut size={20} color="#E50914" />
            <Text style={[styles.menuItemText, styles.signOutText]}>
              {loading ? 'Signing Out...' : 'Sign Out'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
