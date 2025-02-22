export const STATUS_COLORS: Record<string, string> = {
  pending: '#FFA500',    // Orange
  approved: '#4CAF50',   // Green
  rejected: '#FF5722',   // Red
};

export const ENERGY_SOURCE_COLORS: Record<string, string> = {
  solar: '#4CAF50',
  hydro: '#2196F3',
  wind: '#FFC107',
  grid: '#9E9E9E',
};

export const COLORS = {
  // Primary colors
  primary: '#00A651',
  secondary: '#006633',
  
  // Background colors
  background: '#00A651',
  cardBackground: '#FFFFFF',
  
  // Text colors
  textPrimary: '#000000',
  textSecondary: '#666666',
  textLight: '#FFFFFF',
  
  // Status colors
  ...STATUS_COLORS,
  
  // Energy source colors
  ...ENERGY_SOURCE_COLORS,
  
  // UI elements
  border: '#E0E0E0',
  inactive: '#CCCCCC',
  activeText: '#FFFFFF',
  
  // Tab colors
  tabActive: '#00A651',
  tabInactive: '#008B41'
};