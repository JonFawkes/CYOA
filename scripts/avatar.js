// avatar.js define each avatar item
const hairStyles = {
	//female hairstyles
	f_1: { offsetX: 84, offsetY: 48 },
	f_2: { offsetX: 85, offsetY: 48 },
	f_3: { offsetX: 83, offsetY: 48 },
	f_4: { offsetX: 84, offsetY: 49 },
	f_5: { offsetX: 83, offsetY: 48 },
	f_6: { offsetX: 84, offsetY: 49 },
	f_7: { offsetX: 83, offsetY: 47 },
	f_8: { offsetX: 85, offsetY: 48 },
	f_9: { offsetX: 86, offsetY: 48 },
	f_10: { offsetX: 83, offsetY: 45 },
	f_11: { offsetX: 85, offsetY: 48 },
	f_12: { offsetX: 84, offsetY: 48 },
	f_13: { offsetX: 85, offsetY: 48 },
	f_14: { offsetX: 85, offsetY: 48 },
	f_15: { offsetX: 85, offsetY: 48 },
	f_16: { offsetX: 86, offsetY: 48 },
	f_17: { offsetX: 86, offsetY: 48 },
	f_18: { offsetX: 86, offsetY: 48 },
	f_19: { offsetX: 84, offsetY: 48 },
	f_20: { offsetX: 86, offsetY: 48 },
	f_21: { offsetX: 86, offsetY: 48 },
	f_22: { offsetX: 86, offsetY: 48 },
	f_23: { offsetX: 86, offsetY: 48 },
	f_24: { offsetX: 86, offsetY: 48 },
	f_25: { offsetX: 85, offsetY: 48 },
	f_26: { offsetX: 86, offsetY: 48 },
	f_27: { offsetX: 86, offsetY: 48 },
	f_28: { offsetX: 85, offsetY: 48 },
	f_29: { offsetX: 85, offsetY: 48 },
	//male hairstyles
	m_1: { offsetX: 84, offsetY: 49 },
	m_2: { offsetX: 86, offsetY: 49 },
	m_3: { offsetX: 84, offsetY: 49 },
	m_4: { offsetX: 84, offsetY: 49 },
	m_5: { offsetX: 84, offsetY: 49 },
	m_6: { offsetX: 85, offsetY: 48 },
	m_7: { offsetX: 85, offsetY: 47 },
	m_8: { offsetX: 84, offsetY: 47 },
	m_9: { offsetX: 84, offsetY: 46 },
	m_10: { offsetX: 85, offsetY: 46 },
	m_11: { offsetX: 86, offsetY: 44 },
	m_12: { offsetX: 82, offsetY: 49 },
	m_13: { offsetX: 84, offsetY: 46 },
	m_14: { offsetX: 86, offsetY: 49 },
	m_15: { offsetX: 85, offsetY: 49 },
	m_16: { offsetX: 86, offsetY: 49 },
	m_17: { offsetX: 83, offsetY: 48 },
	m_18: { offsetX: 84, offsetY: 49 },
	m_19: { offsetX: 84, offsetY: 49 },
	m_20: { offsetX: 84, offsetY: 49 },
	m_21: { offsetX: 86, offsetY: 49 },
	m_22: { offsetX: 84, offsetY: 49 },
	m_23: { offsetX: 85, offsetY: 49 },
	m_24: { offsetX: 86, offsetY: 49 },
	m_25: { offsetX: 86, offsetY: 49 },
	m_26: { offsetX: 84, offsetY: 48 },
	m_27: { offsetX: 86, offsetY: 49 },
	m_28: { offsetX: 84, offsetY: 49 },
	m_29: { offsetX: 84, offsetY: 49 },
	m_30: { offsetX: 86, offsetY: 49 },
};

const hairColors = {
	black: { /* Could add color-specific properties here if needed */ },
	blue: {},
	brown: {},
	green: {},
	purple: {},
	red: {},
	white: {},
	yellow: {},
};

const hairAssets = {
	//female black hair
	f_1_black: { src: "images/heads/f_1_black.png" },
	f_2_black: { src: "images/heads/f_2_black.png" },
	f_3_black: { src: "images/heads/f_3_black.png" },
	f_4_black: { src: "images/heads/f_4_black.png" },
	f_5_black: { src: "images/heads/f_5_black.png" },
	f_6_black: { src: "images/heads/f_6_black.png" },
	f_7_black: { src: "images/heads/f_7_black.png" },
	f_8_black: { src: "images/heads/f_8_black.png" },
	f_9_black: { src: "images/heads/f_9_black.png" },
	f_10_black: { src: "images/heads/f_10_black.png" },
	f_11_black: { src: "images/heads/f_11_black.png" },
	f_12_black: { src: "images/heads/f_12_black.png" },
	f_13_black: { src: "images/heads/f_13_black.png" },
	f_14_black: { src: "images/heads/f_14_black.png" },
	f_15_black: { src: "images/heads/f_15_black.png" },
	f_16_black: { src: "images/heads/f_16_black.png" },
	f_17_black: { src: "images/heads/f_17_black.png" },
	f_18_black: { src: "images/heads/f_18_black.png" },
	f_19_black: { src: "images/heads/f_19_black.png" },
	f_20_black: { src: "images/heads/f_20_black.png" },
	f_21_black: { src: "images/heads/f_21_black.png" },
	f_22_black: { src: "images/heads/f_22_black.png" },
	f_23_black: { src: "images/heads/f_23_black.png" },
	f_24_black: { src: "images/heads/f_24_black.png" },
	f_25_black: { src: "images/heads/f_25_black.png" },
	f_26_black: { src: "images/heads/f_26_black.png" },
	f_27_black: { src: "images/heads/f_27_black.png" },
	f_28_black: { src: "images/heads/f_28_black.png" },
	f_29_black: { src: "images/heads/f_29_black.png" },
	//male black hair
	m_1_black: { src: "images/heads/m_1_black.png" },
	m_2_black: { src: "images/heads/m_2_black.png" },
	m_3_black: { src: "images/heads/m_3_black.png" },
	m_4_black: { src: "images/heads/m_4_black.png" },
	m_5_black: { src: "images/heads/m_5_black.png" },
	m_6_black: { src: "images/heads/m_6_black.png" },
	m_7_black: { src: "images/heads/m_7_black.png" },
	m_8_black: { src: "images/heads/m_8_black.png" },
	m_9_black: { src: "images/heads/m_9_black.png" },
	m_10_black: { src: "images/heads/m_10_black.png" },
	m_11_black: { src: "images/heads/m_11_black.png" },
	m_12_black: { src: "images/heads/m_12_black.png" },
	m_13_black: { src: "images/heads/m_13_black.png" },
	m_14_black: { src: "images/heads/m_14_black.png" },
	m_15_black: { src: "images/heads/m_15_black.png" },
	m_16_black: { src: "images/heads/m_16_black.png" },
	m_17_black: { src: "images/heads/m_17_black.png" },
	m_18_black: { src: "images/heads/m_18_black.png" },
	m_19_black: { src: "images/heads/m_19_black.png" },
	m_20_black: { src: "images/heads/m_20_black.png" },
	m_21_black: { src: "images/heads/m_21_black.png" },
	m_22_black: { src: "images/heads/m_22_black.png" },
	m_23_black: { src: "images/heads/m_23_black.png" },
	m_24_black: { src: "images/heads/m_24_black.png" },
	m_25_black: { src: "images/heads/m_25_black.png" },
	m_26_black: { src: "images/heads/m_26_black.png" },
	m_27_black: { src: "images/heads/m_27_black.png" },
	m_28_black: { src: "images/heads/m_28_black.png" },
	m_29_black: { src: "images/heads/m_29_black.png" },
	m_30_black: { src: "images/heads/m_30_black.png" },
	//female blue hair
	f_1_blue: { src: "images/heads/f_1_blue.png" },
	f_2_blue: { src: "images/heads/f_2_blue.png" },
	f_3_blue: { src: "images/heads/f_3_blue.png" },
	f_4_blue: { src: "images/heads/f_4_blue.png" },
	f_5_blue: { src: "images/heads/f_5_blue.png" },
	f_6_blue: { src: "images/heads/f_6_blue.png" },
	f_7_blue: { src: "images/heads/f_7_blue.png" },
	f_8_blue: { src: "images/heads/f_8_blue.png" },
	f_9_blue: { src: "images/heads/f_9_blue.png" },
	f_10_blue: { src: "images/heads/f_10_blue.png" },
	f_11_blue: { src: "images/heads/f_11_blue.png" },
	f_12_blue: { src: "images/heads/f_12_blue.png" },
	f_13_blue: { src: "images/heads/f_13_blue.png" },
	f_14_blue: { src: "images/heads/f_14_blue.png" },
	f_15_blue: { src: "images/heads/f_15_blue.png" },
	f_16_blue: { src: "images/heads/f_16_blue.png" },
	f_17_blue: { src: "images/heads/f_17_blue.png" },
	f_18_blue: { src: "images/heads/f_18_blue.png" },
	f_19_blue: { src: "images/heads/f_19_blue.png" },
	f_20_blue: { src: "images/heads/f_20_blue.png" },
	f_21_blue: { src: "images/heads/f_21_blue.png" },
	f_22_blue: { src: "images/heads/f_22_blue.png" },
	f_23_blue: { src: "images/heads/f_23_blue.png" },
	f_24_blue: { src: "images/heads/f_24_blue.png" },
	f_25_blue: { src: "images/heads/f_25_blue.png" },
	f_26_blue: { src: "images/heads/f_26_blue.png" },
	f_27_blue: { src: "images/heads/f_27_blue.png" },
	f_28_blue: { src: "images/heads/f_28_blue.png" },
	f_29_blue: { src: "images/heads/f_29_blue.png" },
	//male blue hair
	m_1_blue: { src: "images/heads/m_1_blue.png" },
	m_2_blue: { src: "images/heads/m_2_blue.png" },
	m_3_blue: { src: "images/heads/m_3_blue.png" },
	m_4_blue: { src: "images/heads/m_4_blue.png" },
	m_5_blue: { src: "images/heads/m_5_blue.png" },
	m_6_blue: { src: "images/heads/m_6_blue.png" },
	m_7_blue: { src: "images/heads/m_7_blue.png" },
	m_8_blue: { src: "images/heads/m_8_blue.png" },
	m_9_blue: { src: "images/heads/m_9_blue.png" },
	m_10_blue: { src: "images/heads/m_10_blue.png" },
	m_11_blue: { src: "images/heads/m_11_blue.png" },
	m_12_blue: { src: "images/heads/m_12_blue.png" },
	m_13_blue: { src: "images/heads/m_13_blue.png" },
	m_14_blue: { src: "images/heads/m_14_blue.png" },
	m_15_blue: { src: "images/heads/m_15_blue.png" },
	m_16_blue: { src: "images/heads/m_16_blue.png" },
	m_17_blue: { src: "images/heads/m_17_blue.png" },
	m_18_blue: { src: "images/heads/m_18_blue.png" },
	m_19_blue: { src: "images/heads/m_19_blue.png" },
	m_20_blue: { src: "images/heads/m_20_blue.png" },
	m_21_blue: { src: "images/heads/m_21_blue.png" },
	m_22_blue: { src: "images/heads/m_22_blue.png" },
	m_23_blue: { src: "images/heads/m_23_blue.png" },
	m_24_blue: { src: "images/heads/m_24_blue.png" },
	m_25_blue: { src: "images/heads/m_25_blue.png" },
	m_26_blue: { src: "images/heads/m_26_blue.png" },
	m_27_blue: { src: "images/heads/m_27_blue.png" },
	m_28_blue: { src: "images/heads/m_28_blue.png" },
	m_29_blue: { src: "images/heads/m_29_blue.png" },
	m_30_blue: { src: "images/heads/m_30_blue.png" },
	//female brown hair
	f_1_brown: { src: "images/heads/f_1_brown.png" },
	f_2_brown: { src: "images/heads/f_2_brown.png" },
	f_3_brown: { src: "images/heads/f_3_brown.png" },
	f_4_brown: { src: "images/heads/f_4_brown.png" },
	f_5_brown: { src: "images/heads/f_5_brown.png" },
	f_6_brown: { src: "images/heads/f_6_brown.png" },
	f_7_brown: { src: "images/heads/f_7_brown.png" },
	f_8_brown: { src: "images/heads/f_8_brown.png" },
	f_9_brown: { src: "images/heads/f_9_brown.png" },
	f_10_brown: { src: "images/heads/f_10_brown.png" },
	f_11_brown: { src: "images/heads/f_11_brown.png" },
	f_12_brown: { src: "images/heads/f_12_brown.png" },
	f_13_brown: { src: "images/heads/f_13_brown.png" },
	f_14_brown: { src: "images/heads/f_14_brown.png" },
	f_15_brown: { src: "images/heads/f_15_brown.png" },
	f_16_brown: { src: "images/heads/f_16_brown.png" },
	f_17_brown: { src: "images/heads/f_17_brown.png" },
	f_18_brown: { src: "images/heads/f_18_brown.png" },
	f_19_brown: { src: "images/heads/f_19_brown.png" },
	f_20_brown: { src: "images/heads/f_20_brown.png" },
	f_21_brown: { src: "images/heads/f_21_brown.png" },
	f_22_brown: { src: "images/heads/f_22_brown.png" },
	f_23_brown: { src: "images/heads/f_23_brown.png" },
	f_24_brown: { src: "images/heads/f_24_brown.png" },
	f_25_brown: { src: "images/heads/f_25_brown.png" },
	f_26_brown: { src: "images/heads/f_26_brown.png" },
	f_27_brown: { src: "images/heads/f_27_brown.png" },
	f_28_brown: { src: "images/heads/f_28_brown.png" },
	f_29_brown: { src: "images/heads/f_29_brown.png" },
	//male brown hair
	m_1_brown: { src: "images/heads/m_1_brown.png" },
	m_2_brown: { src: "images/heads/m_2_brown.png" },
	m_3_brown: { src: "images/heads/m_3_brown.png" },
	m_4_brown: { src: "images/heads/m_4_brown.png" },
	m_5_brown: { src: "images/heads/m_5_brown.png" },
	m_6_brown: { src: "images/heads/m_6_brown.png" },
	m_7_brown: { src: "images/heads/m_7_brown.png" },
	m_8_brown: { src: "images/heads/m_8_brown.png" },
	m_9_brown: { src: "images/heads/m_9_brown.png" },
	m_10_brown: { src: "images/heads/m_10_brown.png" },
	m_11_brown: { src: "images/heads/m_11_brown.png" },
	m_12_brown: { src: "images/heads/m_12_brown.png" },
	m_13_brown: { src: "images/heads/m_13_brown.png" },
	m_14_brown: { src: "images/heads/m_14_brown.png" },
	m_15_brown: { src: "images/heads/m_15_brown.png" },
	m_16_brown: { src: "images/heads/m_16_brown.png" },
	m_17_brown: { src: "images/heads/m_17_brown.png" },
	m_18_brown: { src: "images/heads/m_18_brown.png" },
	m_19_brown: { src: "images/heads/m_19_brown.png" },
	m_20_brown: { src: "images/heads/m_20_brown.png" },
	m_21_brown: { src: "images/heads/m_21_brown.png" },
	m_22_brown: { src: "images/heads/m_22_brown.png" },
	m_23_brown: { src: "images/heads/m_23_brown.png" },
	m_24_brown: { src: "images/heads/m_24_brown.png" },
	m_25_brown: { src: "images/heads/m_25_brown.png" },
	m_26_brown: { src: "images/heads/m_26_brown.png" },
	m_27_brown: { src: "images/heads/m_27_brown.png" },
	m_28_brown: { src: "images/heads/m_28_brown.png" },
	m_29_brown: { src: "images/heads/m_29_brown.png" },
	m_30_brown: { src: "images/heads/m_30_brown.png" },
	//female green hair
	f_1_green: { src: "images/heads/f_1_green.png" },
	f_2_green: { src: "images/heads/f_2_green.png" },
	f_3_green: { src: "images/heads/f_3_green.png" },
	f_4_green: { src: "images/heads/f_4_green.png" },
	f_5_green: { src: "images/heads/f_5_green.png" },
	f_6_green: { src: "images/heads/f_6_green.png" },
	f_7_green: { src: "images/heads/f_7_green.png" },
	f_8_green: { src: "images/heads/f_8_green.png" },
	f_9_green: { src: "images/heads/f_9_green.png" },
	f_10_green: { src: "images/heads/f_10_green.png" },
	f_11_green: { src: "images/heads/f_11_green.png" },
	f_12_green: { src: "images/heads/f_12_green.png" },
	f_13_green: { src: "images/heads/f_13_green.png" },
	f_14_green: { src: "images/heads/f_14_green.png" },
	f_15_green: { src: "images/heads/f_15_green.png" },
	f_16_green: { src: "images/heads/f_16_green.png" },
	f_17_green: { src: "images/heads/f_17_green.png" },
	f_18_green: { src: "images/heads/f_18_green.png" },
	f_19_green: { src: "images/heads/f_19_green.png" },
	f_20_green: { src: "images/heads/f_20_green.png" },
	f_21_green: { src: "images/heads/f_21_green.png" },
	f_22_green: { src: "images/heads/f_22_green.png" },
	f_23_green: { src: "images/heads/f_23_green.png" },
	f_24_green: { src: "images/heads/f_24_green.png" },
	f_25_green: { src: "images/heads/f_25_green.png" },
	f_26_green: { src: "images/heads/f_26_green.png" },
	f_27_green: { src: "images/heads/f_27_green.png" },
	f_28_green: { src: "images/heads/f_28_green.png" },
	f_29_green: { src: "images/heads/f_29_green.png" },
	//male green hair
	m_1_green: { src: "images/heads/m_1_green.png" },
	m_2_green: { src: "images/heads/m_2_green.png" },
	m_3_green: { src: "images/heads/m_3_green.png" },
	m_4_green: { src: "images/heads/m_4_green.png" },
	m_5_green: { src: "images/heads/m_5_green.png" },
	m_6_green: { src: "images/heads/m_6_green.png" },
	m_7_green: { src: "images/heads/m_7_green.png" },
	m_8_green: { src: "images/heads/m_8_green.png" },
	m_9_green: { src: "images/heads/m_9_green.png" },
	m_10_green: { src: "images/heads/m_10_green.png" },
	m_11_green: { src: "images/heads/m_11_green.png" },
	m_12_green: { src: "images/heads/m_12_green.png" },
	m_13_green: { src: "images/heads/m_13_green.png" },
	m_14_green: { src: "images/heads/m_14_green.png" },
	m_15_green: { src: "images/heads/m_15_green.png" },
	m_16_green: { src: "images/heads/m_16_green.png" },
	m_17_green: { src: "images/heads/m_17_green.png" },
	m_18_green: { src: "images/heads/m_18_green.png" },
	m_19_green: { src: "images/heads/m_19_green.png" },
	m_20_green: { src: "images/heads/m_20_green.png" },
	m_21_green: { src: "images/heads/m_21_green.png" },
	m_22_green: { src: "images/heads/m_22_green.png" },
	m_23_green: { src: "images/heads/m_23_green.png" },
	m_24_green: { src: "images/heads/m_24_green.png" },
	m_25_green: { src: "images/heads/m_25_green.png" },
	m_26_green: { src: "images/heads/m_26_green.png" },
	m_27_green: { src: "images/heads/m_27_green.png" },
	m_28_green: { src: "images/heads/m_28_green.png" },
	m_29_green: { src: "images/heads/m_29_green.png" },
	m_30_green: { src: "images/heads/m_30_green.png" },
	//female purple hair
	f_1_purple: { src: "images/heads/f_1_purple.png" },
	f_2_purple: { src: "images/heads/f_2_purple.png" },
	f_3_purple: { src: "images/heads/f_3_purple.png" },
	f_4_purple: { src: "images/heads/f_4_purple.png" },
	f_5_purple: { src: "images/heads/f_5_purple.png" },
	f_6_purple: { src: "images/heads/f_6_purple.png" },
	f_7_purple: { src: "images/heads/f_7_purple.png" },
	f_8_purple: { src: "images/heads/f_8_purple.png" },
	f_9_purple: { src: "images/heads/f_9_purple.png" },
	f_10_purple: { src: "images/heads/f_10_purple.png" },
	f_11_purple: { src: "images/heads/f_11_purple.png" },
	f_12_purple: { src: "images/heads/f_12_purple.png" },
	f_13_purple: { src: "images/heads/f_13_purple.png" },
	f_14_purple: { src: "images/heads/f_14_purple.png" },
	f_15_purple: { src: "images/heads/f_15_purple.png" },
	f_16_purple: { src: "images/heads/f_16_purple.png" },
	f_17_purple: { src: "images/heads/f_17_purple.png" },
	f_18_purple: { src: "images/heads/f_18_purple.png" },
	f_19_purple: { src: "images/heads/f_19_purple.png" },
	f_20_purple: { src: "images/heads/f_20_purple.png" },
	f_21_purple: { src: "images/heads/f_21_purple.png" },
	f_22_purple: { src: "images/heads/f_22_purple.png" },
	f_23_purple: { src: "images/heads/f_23_purple.png" },
	f_24_purple: { src: "images/heads/f_24_purple.png" },
	f_25_purple: { src: "images/heads/f_25_purple.png" },
	f_26_purple: { src: "images/heads/f_26_purple.png" },
	f_27_purple: { src: "images/heads/f_27_purple.png" },
	f_28_purple: { src: "images/heads/f_28_purple.png" },
	f_29_purple: { src: "images/heads/f_29_purple.png" },
	//male purple hair
	m_1_purple: { src: "images/heads/m_1_purple.png" },
	m_2_purple: { src: "images/heads/m_2_purple.png" },
	m_3_purple: { src: "images/heads/m_3_purple.png" },
	m_4_purple: { src: "images/heads/m_4_purple.png" },
	m_5_purple: { src: "images/heads/m_5_purple.png" },
	m_6_purple: { src: "images/heads/m_6_purple.png" },
	m_7_purple: { src: "images/heads/m_7_purple.png" },
	m_8_purple: { src: "images/heads/m_8_purple.png" },
	m_9_purple: { src: "images/heads/m_9_purple.png" },
	m_10_purple: { src: "images/heads/m_10_purple.png" },
	m_11_purple: { src: "images/heads/m_11_purple.png" },
	m_12_purple: { src: "images/heads/m_12_purple.png" },
	m_13_purple: { src: "images/heads/m_13_purple.png" },
	m_14_purple: { src: "images/heads/m_14_purple.png" },
	m_15_purple: { src: "images/heads/m_15_purple.png" },
	m_16_purple: { src: "images/heads/m_16_purple.png" },
	m_17_purple: { src: "images/heads/m_17_purple.png" },
	m_18_purple: { src: "images/heads/m_18_purple.png" },
	m_19_purple: { src: "images/heads/m_19_purple.png" },
	m_20_purple: { src: "images/heads/m_20_purple.png" },
	m_21_purple: { src: "images/heads/m_21_purple.png" },
	m_22_purple: { src: "images/heads/m_22_purple.png" },
	m_23_purple: { src: "images/heads/m_23_purple.png" },
	m_24_purple: { src: "images/heads/m_24_purple.png" },
	m_25_purple: { src: "images/heads/m_25_purple.png" },
	m_26_purple: { src: "images/heads/m_26_purple.png" },
	m_27_purple: { src: "images/heads/m_27_purple.png" },
	m_28_purple: { src: "images/heads/m_28_purple.png" },
	m_29_purple: { src: "images/heads/m_29_purple.png" },
	m_30_purple: { src: "images/heads/m_30_purple.png" },
	//female red hair
	f_1_red: { src: "images/heads/f_1_red.png" },
	f_2_red: { src: "images/heads/f_2_red.png" },
	f_3_red: { src: "images/heads/f_3_red.png" },
	f_4_red: { src: "images/heads/f_4_red.png" },
	f_5_red: { src: "images/heads/f_5_red.png" },
	f_6_red: { src: "images/heads/f_6_red.png" },
	f_7_red: { src: "images/heads/f_7_red.png" },
	f_8_red: { src: "images/heads/f_8_red.png" },
	f_9_red: { src: "images/heads/f_9_red.png" },
	f_10_red: { src: "images/heads/f_10_red.png" },
	f_11_red: { src: "images/heads/f_11_red.png" },
	f_12_red: { src: "images/heads/f_12_red.png" },
	f_13_red: { src: "images/heads/f_13_red.png" },
	f_14_red: { src: "images/heads/f_14_red.png" },
	f_15_red: { src: "images/heads/f_15_red.png" },
	f_16_red: { src: "images/heads/f_16_red.png" },
	f_17_red: { src: "images/heads/f_17_red.png" },
	f_18_red: { src: "images/heads/f_18_red.png" },
	f_19_red: { src: "images/heads/f_19_red.png" },
	f_20_red: { src: "images/heads/f_20_red.png" },
	f_21_red: { src: "images/heads/f_21_red.png" },
	f_22_red: { src: "images/heads/f_22_red.png" },
	f_23_red: { src: "images/heads/f_23_red.png" },
	f_24_red: { src: "images/heads/f_24_red.png" },
	f_25_red: { src: "images/heads/f_25_red.png" },
	f_26_red: { src: "images/heads/f_26_red.png" },
	f_27_red: { src: "images/heads/f_27_red.png" },
	f_28_red: { src: "images/heads/f_28_red.png" },
	f_29_red: { src: "images/heads/f_29_red.png" },
	//male red hair
	m_1_red: { src: "images/heads/m_1_red.png" },
	m_2_red: { src: "images/heads/m_2_red.png" },
	m_3_red: { src: "images/heads/m_3_red.png" },
	m_4_red: { src: "images/heads/m_4_red.png" },
	m_5_red: { src: "images/heads/m_5_red.png" },
	m_6_red: { src: "images/heads/m_6_red.png" },
	m_7_red: { src: "images/heads/m_7_red.png" },
	m_8_red: { src: "images/heads/m_8_red.png" },
	m_9_red: { src: "images/heads/m_9_red.png" },
	m_10_red: { src: "images/heads/m_10_red.png" },
	m_11_red: { src: "images/heads/m_11_red.png" },
	m_12_red: { src: "images/heads/m_12_red.png" },
	m_13_red: { src: "images/heads/m_13_red.png" },
	m_14_red: { src: "images/heads/m_14_red.png" },
	m_15_red: { src: "images/heads/m_15_red.png" },
	m_16_red: { src: "images/heads/m_16_red.png" },
	m_17_red: { src: "images/heads/m_17_red.png" },
	m_18_red: { src: "images/heads/m_18_red.png" },
	m_19_red: { src: "images/heads/m_19_red.png" },
	m_20_red: { src: "images/heads/m_20_red.png" },
	m_21_red: { src: "images/heads/m_21_red.png" },
	m_22_red: { src: "images/heads/m_22_red.png" },
	m_23_red: { src: "images/heads/m_23_red.png" },
	m_24_red: { src: "images/heads/m_24_red.png" },
	m_25_red: { src: "images/heads/m_25_red.png" },
	m_26_red: { src: "images/heads/m_26_red.png" },
	m_27_red: { src: "images/heads/m_27_red.png" },
	m_28_red: { src: "images/heads/m_28_red.png" },
	m_29_red: { src: "images/heads/m_29_red.png" },
	m_30_red: { src: "images/heads/m_30_red.png" },
	//female white hair
	f_1_white: { src: "images/heads/f_1_white.png" },
	f_2_white: { src: "images/heads/f_2_white.png" },
	f_3_white: { src: "images/heads/f_3_white.png" },
	f_4_white: { src: "images/heads/f_4_white.png" },
	f_5_white: { src: "images/heads/f_5_white.png" },
	f_6_white: { src: "images/heads/f_6_white.png" },
	f_7_white: { src: "images/heads/f_7_white.png" },
	f_8_white: { src: "images/heads/f_8_white.png" },
	f_9_white: { src: "images/heads/f_9_white.png" },
	f_10_white: { src: "images/heads/f_10_white.png" },
	f_11_white: { src: "images/heads/f_11_white.png" },
	f_12_white: { src: "images/heads/f_12_white.png" },
	f_13_white: { src: "images/heads/f_13_white.png" },
	f_14_white: { src: "images/heads/f_14_white.png" },
	f_15_white: { src: "images/heads/f_15_white.png" },
	f_16_white: { src: "images/heads/f_16_white.png" },
	f_17_white: { src: "images/heads/f_17_white.png" },
	f_18_white: { src: "images/heads/f_18_white.png" },
	f_19_white: { src: "images/heads/f_19_white.png" },
	f_20_white: { src: "images/heads/f_20_white.png" },
	f_21_white: { src: "images/heads/f_21_white.png" },
	f_22_white: { src: "images/heads/f_22_white.png" },
	f_23_white: { src: "images/heads/f_23_white.png" },
	f_24_white: { src: "images/heads/f_24_white.png" },
	f_25_white: { src: "images/heads/f_25_white.png" },
	f_26_white: { src: "images/heads/f_26_white.png" },
	f_27_white: { src: "images/heads/f_27_white.png" },
	f_28_white: { src: "images/heads/f_28_white.png" },
	f_29_white: { src: "images/heads/f_29_white.png" },
	//male white hair
	m_1_white: { src: "images/heads/m_1_white.png" },
	m_2_white: { src: "images/heads/m_2_white.png" },
	m_3_white: { src: "images/heads/m_3_white.png" },
	m_4_white: { src: "images/heads/m_4_white.png" },
	m_5_white: { src: "images/heads/m_5_white.png" },
	m_6_white: { src: "images/heads/m_6_white.png" },
	m_7_white: { src: "images/heads/m_7_white.png" },
	m_8_white: { src: "images/heads/m_8_white.png" },
	m_9_white: { src: "images/heads/m_9_white.png" },
	m_10_white: { src: "images/heads/m_10_white.png" },
	m_11_white: { src: "images/heads/m_11_white.png" },
	m_12_white: { src: "images/heads/m_12_white.png" },
	m_13_white: { src: "images/heads/m_13_white.png" },
	m_14_white: { src: "images/heads/m_14_white.png" },
	m_15_white: { src: "images/heads/m_15_white.png" },
	m_16_white: { src: "images/heads/m_16_white.png" },
	m_17_white: { src: "images/heads/m_17_white.png" },
	m_18_white: { src: "images/heads/m_18_white.png" },
	m_19_white: { src: "images/heads/m_19_white.png" },
	m_20_white: { src: "images/heads/m_20_white.png" },
	m_21_white: { src: "images/heads/m_21_white.png" },
	m_22_white: { src: "images/heads/m_22_white.png" },
	m_23_white: { src: "images/heads/m_23_white.png" },
	m_24_white: { src: "images/heads/m_24_white.png" },
	m_25_white: { src: "images/heads/m_25_white.png" },
	m_26_white: { src: "images/heads/m_26_white.png" },
	m_27_white: { src: "images/heads/m_27_white.png" },
	m_28_white: { src: "images/heads/m_28_white.png" },
	m_29_white: { src: "images/heads/m_29_white.png" },
	m_30_white: { src: "images/heads/m_30_white.png" },
	//female yellow hair
	f_1_yellow: { src: "images/heads/f_1_yellow.png" },
	f_2_yellow: { src: "images/heads/f_2_yellow.png" },
	f_3_yellow: { src: "images/heads/f_3_yellow.png" },
	f_4_yellow: { src: "images/heads/f_4_yellow.png" },
	f_5_yellow: { src: "images/heads/f_5_yellow.png" },
	f_6_yellow: { src: "images/heads/f_6_yellow.png" },
	f_7_yellow: { src: "images/heads/f_7_yellow.png" },
	f_8_yellow: { src: "images/heads/f_8_yellow.png" },
	f_9_yellow: { src: "images/heads/f_9_yellow.png" },
	f_10_yellow: { src: "images/heads/f_10_yellow.png" },
	f_11_yellow: { src: "images/heads/f_11_yellow.png" },
	f_12_yellow: { src: "images/heads/f_12_yellow.png" },
	f_13_yellow: { src: "images/heads/f_13_yellow.png" },
	f_14_yellow: { src: "images/heads/f_14_yellow.png" },
	f_15_yellow: { src: "images/heads/f_15_yellow.png" },
	f_16_yellow: { src: "images/heads/f_16_yellow.png" },
	f_17_yellow: { src: "images/heads/f_17_yellow.png" },
	f_18_yellow: { src: "images/heads/f_18_yellow.png" },
	f_19_yellow: { src: "images/heads/f_19_yellow.png" },
	f_20_yellow: { src: "images/heads/f_20_yellow.png" },
	f_21_yellow: { src: "images/heads/f_21_yellow.png" },
	f_22_yellow: { src: "images/heads/f_22_yellow.png" },
	f_23_yellow: { src: "images/heads/f_23_yellow.png" },
	f_24_yellow: { src: "images/heads/f_24_yellow.png" },
	f_25_yellow: { src: "images/heads/f_25_yellow.png" },
	f_26_yellow: { src: "images/heads/f_26_yellow.png" },
	f_27_yellow: { src: "images/heads/f_27_yellow.png" },
	f_28_yellow: { src: "images/heads/f_28_yellow.png" },
	f_29_yellow: { src: "images/heads/f_29_yellow.png" },
	//male yellow hair
	m_1_yellow: { src: "images/heads/m_1_yellow.png" },
	m_2_yellow: { src: "images/heads/m_2_yellow.png" },
	m_3_yellow: { src: "images/heads/m_3_yellow.png" },
	m_4_yellow: { src: "images/heads/m_4_yellow.png" },
	m_5_yellow: { src: "images/heads/m_5_yellow.png" },
	m_6_yellow: { src: "images/heads/m_6_yellow.png" },
	m_7_yellow: { src: "images/heads/m_7_yellow.png" },
	m_8_yellow: { src: "images/heads/m_8_yellow.png" },
	m_9_yellow: { src: "images/heads/m_9_yellow.png" },
	m_10_yellow: { src: "images/heads/m_10_yellow.png" },
	m_11_yellow: { src: "images/heads/m_11_yellow.png" },
	m_12_yellow: { src: "images/heads/m_12_yellow.png" },
	m_13_yellow: { src: "images/heads/m_13_yellow.png" },
	m_14_yellow: { src: "images/heads/m_14_yellow.png" },
	m_15_yellow: { src: "images/heads/m_15_yellow.png" },
	m_16_yellow: { src: "images/heads/m_16_yellow.png" },
	m_17_yellow: { src: "images/heads/m_17_yellow.png" },
	m_18_yellow: { src: "images/heads/m_18_yellow.png" },
	m_19_yellow: { src: "images/heads/m_19_yellow.png" },
	m_20_yellow: { src: "images/heads/m_20_yellow.png" },
	m_21_yellow: { src: "images/heads/m_21_yellow.png" },
	m_22_yellow: { src: "images/heads/m_22_yellow.png" },
	m_23_yellow: { src: "images/heads/m_23_yellow.png" },
	m_24_yellow: { src: "images/heads/m_24_yellow.png" },
	m_25_yellow: { src: "images/heads/m_25_yellow.png" },
	m_26_yellow: { src: "images/heads/m_26_yellow.png" },
	m_27_yellow: { src: "images/heads/m_27_yellow.png" },
	m_28_yellow: { src: "images/heads/m_28_yellow.png" },
	m_29_yellow: { src: "images/heads/m_29_yellow.png" },
	m_30_yellow: { src: "images/heads/m_30_yellow.png" },
};

const costumes = {
	abysschaser: { 
		male: { src: "images/body/m-abysschaser.png", offsetX: 77, offsetY: 69 },
		female: { src: "images/body/f-abysschaser.png", offsetX: 76, offsetY: 70 }
	},
	acolyte: { 
		male: { src: "images/body/m-acolyte.png", offsetX: 81, offsetY: 70 },
		female: { src: "images/body/f-acolyte.png", offsetX: 83, offsetY: 70 }
	},
	alchemist: { 
		male: { src: "images/body/m-alchemist.png", offsetX: 79, offsetY: 69 },
		female: { src: "images/body/f-alchemist.png", offsetX: 80, offsetY: 72 }
	},
	archbishop: { 
		male: { src: "images/body/m-archbishop.png", offsetX: 76, offsetY: 68 },
		female: { src: "images/body/f-archbishop.png", offsetX: 78, offsetY: 70 }
	},
	archbishopAlt: { 
		male: { src: "images/body/m-archbishopAlt.png", offsetX: 76, offsetY: 68 },
		female: { src: "images/body/f-archbishopAlt.png", offsetX: 76, offsetY: 70 }
	},
	archer: { 
		male: { src: "images/body/m-archer.png", offsetX: 79, offsetY: 70 },
		female: { src: "images/body/f-archer.png", offsetX: 80, offsetY: 71 }
	},
	archmage: { 
		male: { src: "images/body/m-archmage.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-archmage.png", offsetX: 76, offsetY: 71 }
	},
	assassin: { 
		male: { src: "images/body/m-assassin.png", offsetX: 78, offsetY: 68 },
		female: { src: "images/body/f-assassin.png", offsetX: 82, offsetY: 70 }
	},
	assassincross: { 
		male: { src: "images/body/m-assassincross.png", offsetX: 75, offsetY: 68 },
		female: { src: "images/body/f-assassincross.png", offsetX: 80, offsetY: 71 }
	},
	biochemist: { 
		male: { src: "images/body/m-biochemist.png", offsetX: 79, offsetY: 70 },
		female: { src: "images/body/f-biochemist.png", offsetX: 79, offsetY: 70 }
	},
	biolo: { 
		male: { src: "images/body/m-biolo.png", offsetX: 72, offsetY: 71 },
		female: { src: "images/body/f-biolo.png", offsetX: 74, offsetY: 70 }
	},
	blacksmith: { 
		male: { src: "images/body/m-blacksmith.png", offsetX: 78, offsetY: 71 },
		female: { src: "images/body/f-blacksmith.png", offsetX: 78, offsetY: 71 }
	},
	cardinal: { 
		male: { src: "images/body/m-cardinal.png", offsetX: 76, offsetY: 71 },
		female: { src: "images/body/f-cardinal.png", offsetX: 78, offsetY: 70 }
	},
	champion: { 
		male: { src: "images/body/m-champion.png", offsetX: 78, offsetY: 69 },
		female: { src: "images/body/f-champion.png", offsetX: 80, offsetY: 70 }
	},
	crusader: { 
		male: { src: "images/body/m-crusader.png", offsetX: 76, offsetY: 69 },
		female: { src: "images/body/f-crusader.png", offsetX: 78, offsetY: 70 }
	},
	performer: { 
		male: { src: "images/body/m-bard.png", offsetX: 79, offsetY: 68 },
		female: { src: "images/body/f-dancer.png", offsetX: 78, offsetY: 70 }
	},
	performerAlt: { 
		male: { src: "images/body/m-bard.png", offsetX: 79, offsetY: 68 },
		female: { src: "images/body/f-dancerAlt.png", offsetX: 78, offsetY: 70 }
	},
	dragonknight: { 
		male: { src: "images/body/m-dragonknight.png", offsetX: 76, offsetY: 69 },
		female: { src: "images/body/f-dragonknight.png", offsetX: 76, offsetY: 71 }
	},
	elementalmaster: { 
		male: { src: "images/body/m-elementalmaster.png", offsetX: 77, offsetY: 71 },
		female: { src: "images/body/f-elementalmaster.png", offsetX: 73, offsetY: 72 }
	},
	genetic: { 
		male: { src: "images/body/m-genetic.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-genetic.png", offsetX: 76, offsetY: 69 }
	},
	geneticAlt: { 
		male: { src: "images/body/m-geneticAlt.png", offsetX: 76, offsetY: 71 },
		female: { src: "images/body/f-geneticAlt.png", offsetX: 76, offsetY: 72 }
	},
	GM: { 
		male: { src: "images/body/m-GM.png", offsetX: 79, offsetY: 70 },
		female: { src: "images/body/f-GM.png", offsetX: 83, offsetY: 70 }
	},
	guillotinecross: {
		male: { src: "images/body/m-guillotinecross.png", offsetX: 75, offsetY: 68 },
		female: { src: "images/body/f-guillotinecross.png", offsetX: 78, offsetY: 70 }
	},
	guillotinecrossAlt: { 
		male: { src: "images/body/m-guillotinecrossAlt.png", offsetX: 71, offsetY: 71 },
		female: { src: "images/body/f-guillotinecrossAlt.png", offsetX: 78, offsetY: 70 }
	},
	gunslinger: { 
		male: { src: "images/body/m-gunslinger.png", offsetX: 76, offsetY: 66 },
		female: { src: "images/body/f-gunslinger.png", offsetX: 80, offsetY: 69 }
	},
	entertainer: { 
		male: { src: "images/body/m-minstrel.png", offsetX: 80, offsetY: 69 },
		female: { src: "images/body/f-gypsy.png", offsetX: 79, offsetY: 70 }
	},
	hanbok: { 
		male: { src: "images/body/m-hanbok.png", offsetX: 76, offsetY: 71 },
		female: { src: "images/body/f-hanbok.png", offsetX: 71, offsetY: 71 }
	},
	highpriest: { 
		male: { src: "images/body/m-highpriest.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-highpriest.png", offsetX: 80, offsetY: 71 }
	},
	highwizard: { 
		male: { src: "images/body/m-highwizard.png", offsetX: 78, offsetY: 70 },
		female: { src: "images/body/f-highwizard.png", offsetX: 80, offsetY: 71 }
	},
	hunter: { 
		male: { src: "images/body/m-hunter.png", offsetX: 80, offsetY: 71 },
		female: { src: "images/body/f-hunter.png", offsetX: 80, offsetY: 70 }
	},
	hypernovice: { 
		male: { src: "images/body/m-hypernovice.png", offsetX: 78, offsetY: 71 },
		female: { src: "images/body/f-hypernovice.png", offsetX: 78, offsetY: 72 }
	},
	imperialguard: { 
		male: { src: "images/body/m-imperialguard.png", offsetX: 74, offsetY: 68 },
		female: { src: "images/body/f-imperialguard.png", offsetX: 74, offsetY: 69 }
	},
	inquisitor: { 
		male: { src: "images/body/m-inquisitor.png", offsetX: 76, offsetY: 71 },
		female: { src: "images/body/f-inquisitor.png", offsetX: 76, offsetY: 71 }
	},
	knight: { 
		male: { src: "images/body/m-knight.png", offsetX: 79, offsetY: 71 },
		female: { src: "images/body/f-knight.png", offsetX: 80, offsetY: 71 }
	},
	lordknight: { 
		male: { src: "images/body/m-lordknight.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-lordknight.png", offsetX: 76, offsetY: 70 }
	},
	mage: { 
		male: { src: "images/body/m-mage.png", offsetX: 78, offsetY: 72 },
		female: { src: "images/body/f-mage.png", offsetX: 80, offsetY: 71 }
	},
	mastersmith: { 
		male: { src: "images/body/m-mastersmith.png", offsetX: 77, offsetY: 71 },
		female: { src: "images/body/f-mastersmith.png", offsetX: 79, offsetY: 71 }
	},
	mechanic: { 
		male: { src: "images/body/m-mechanic.png", offsetX: 77, offsetY: 69 },
		female: { src: "images/body/f-mechanic.png", offsetX: 79, offsetY: 71 }
	},
	mechanicAlt: { 
		male: { src: "images/body/m-mechanicAlt.png", offsetX: 77, offsetY: 70 },
		female: { src: "images/body/f-mechanicAlt.png", offsetX: 79, offsetY: 71 }
	},
	meister: { 
		male: { src: "images/body/m-meister.png", offsetX: 74, offsetY: 67 },
		female: { src: "images/body/f-meister.png", offsetX: 75, offsetY: 66 }
	},
	merchant: { 
		male: { src: "images/body/m-merchant.png", offsetX: 80, offsetY: 70 },
		female: { src: "images/body/f-merchant.png", offsetX: 80, offsetY: 70 }
	},
	monk: { 
		male: { src: "images/body/m-monk.png", offsetX: 77, offsetY: 68 },
		female: { src: "images/body/f-monk.png", offsetX: 79, offsetY: 71 }
	},
	nightwatch: { 
		male: { src: "images/body/m-nightwatch.png", offsetX: 72, offsetY: 71 },
		female: { src: "images/body/f-nightwatch.png", offsetX: 75, offsetY: 71 }
	},
	ninja: { 
		male: { src: "images/body/m-ninja.png", offsetX: 76, offsetY: 62 },
		female: { src: "images/body/f-ninja.png", offsetX: 75, offsetY: 61 }
	},
	novice: { 
		male: { src: "images/body/m-novice.png", offsetX: 79, offsetY: 69 },
		female: { src: "images/body/f-novice.png", offsetX: 80, offsetY: 71 }
	},
	chunin: { 
		male: { src: "images/body/m-kagerou.png", offsetX: 75, offsetY: 70 },
		female: { src: "images/body/f-oboro.png", offsetX: 80, offsetY: 71 }
	},
	paladin: { 
		male: { src: "images/body/m-paladin.png", offsetX: 70, offsetY: 69 },
		female: { src: "images/body/f-paladin.png", offsetX: 77, offsetY: 69 }
	},
	priest: {
		male: { src: "images/body/m-priest.png", offsetX: 76, offsetY: 69 },
		female: { src: "images/body/f-priest.png", offsetX: 77, offsetY: 70 }
	},
	ranger: { 
		male: { src: "images/body/m-ranger.png", offsetX: 77, offsetY: 71 },
		female: { src: "images/body/f-ranger.png", offsetX: 80, offsetY: 71 }
	},
	rangerAlt: { 
		male: { src: "images/body/m-rangerAlt.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-rangerAlt.png", offsetX: 77, offsetY: 70 }
	},
	rebellion: { 
		male: { src: "images/body/m-rebellion.png", offsetX: 76, offsetY: 68 },
		female: { src: "images/body/f-rebellion.png", offsetX: 76, offsetY: 68 }
	},
	rogue: { 
		male: { src: "images/body/m-rogue.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-rogue.png", offsetX: 80, offsetY: 71 }
	},
	royalguard: { 
		male: { src: "images/body/m-royalguard.png", offsetX: 75, offsetY: 67 },
		female: { src: "images/body/f-royalguard.png", offsetX: 76, offsetY: 71 }
	},
	royalguardAlt: { 
		male: { src: "images/body/m-royalguardAlt.png", offsetX: 73, offsetY: 70 },
		female: { src: "images/body/f-royalguardAlt.png", offsetX: 75, offsetY: 71 }
	},
	runeknight: { 
		male: { src: "images/body/m-runeknight.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-runeknight.png", offsetX: 76, offsetY: 71 }
	},
	runeknightAlt: { 
		male: { src: "images/body/m-runeknightAlt.png", offsetX: 78, offsetY: 69 },
		female: { src: "images/body/f-runeknightAlt.png", offsetX: 78, offsetY: 70 }
	},
	runeknightAlt2: { 
		male: { src: "images/body/m-runeknightAlt2.png", offsetX: 75, offsetY: 69 },
		female: { src: "images/body/f-runeknightAlt2.png", offsetX: 79, offsetY: 70 }
	},
	sage: { 
		male: { src: "images/body/m-sage.png", offsetX: 78, offsetY: 69 },
		female: { src: "images/body/f-sage.png", offsetX: 80, offsetY: 71 }
	},
	santa: { 
		male: { src: "images/body/m-santa.png", offsetX: 77, offsetY: 65 },
		female: { src: "images/body/f-santa.png", offsetX: 79, offsetY: 68 }
	},
	scholar: { 
		male: { src: "images/body/m-scholar.png", offsetX: 75, offsetY: 66 },
		female: { src: "images/body/f-scholar.png", offsetX: 77, offsetY: 67 }
	},
	shadowchaser: { 
		male: { src: "images/body/m-shadowchaser.png", offsetX: 75, offsetY: 66 },
		female: { src: "images/body/f-shadowchaser.png", offsetX: 78, offsetY: 70 }
	},
	shadowchaserAlt: { 
		male: { src: "images/body/m-shadowchaserAlt.png", offsetX: 68, offsetY: 66 },
		female: { src: "images/body/f-shadowchaserAlt.png", offsetX: 72, offsetY: 65 }
	},
	shadowcross: { 
		male: { src: "images/body/m-shadowcross.png", offsetX: 75, offsetY: 70 },
		female: { src: "images/body/f-shadowcross.png", offsetX: 78, offsetY: 70 }
	},
	jonin: { 
		male: { src: "images/body/m-shinkiro.png", offsetX: 75, offsetY: 68 },
		female: { src: "images/body/f-shiranui.png", offsetX: 77, offsetY: 70 }
	},
	shura: { 
		male: { src: "images/body/m-shura.png", offsetX: 75, offsetY: 68 },
		female: { src: "images/body/f-shura.png", offsetX: 78, offsetY: 69 }
	},
	shuraAlt: { 
		male: { src: "images/body/m-shuraAlt.png", offsetX: 74, offsetY: 72 },
		female: { src: "images/body/f-shuraAlt.png", offsetX: 75, offsetY: 69 }
	},
	skyemperor: { 
		male: { src: "images/body/m-skyemperor.png", offsetX: 75, offsetY: 71 },
		female: { src: "images/body/f-skyemperor.png", offsetX: 74, offsetY: 71 }
	},
	sniper: { 
		male: { src: "images/body/m-sniper.png", offsetX: 78, offsetY: 70 },
		female: { src: "images/body/f-sniper.png", offsetX: 80, offsetY: 71 }
	},
	sorcerer: { 
		male: { src: "images/body/m-sorcerer.png", offsetX: 72, offsetY: 65 },
		female: { src: "images/body/f-sorcerer.png", offsetX: 74, offsetY: 67 }
	},
	sorcererAlt: { 
		male: { src: "images/body/m-sorcererAlt.png", offsetX: 73, offsetY: 66 },
		female: { src: "images/body/f-sorcererAlt.png", offsetX: 76, offsetY: 68 }
	},
	soulascetic: { 
		male: { src: "images/body/m-soulascetic.png", offsetX: 76, offsetY: 69 },
		female: { src: "images/body/f-soulascetic.png", offsetX: 74, offsetY: 70 }
	},
	soullinker: { 
		male: { src: "images/body/m-soullinker.png", offsetX: 77, offsetY: 70 },
		female: { src: "images/body/f-soullinker.png", offsetX: 77, offsetY: 71 }
	},
	soulreaper: {
		male: { src: "images/body/m-soulreaper.png", offsetX: 78, offsetY: 71 },
		female: { src: "images/body/f-soulreaper.png", offsetX: 75, offsetY: 70 }
	},
	stalker: { 
		male: { src: "images/body/m-stalker.png", offsetX: 76, offsetY: 69 },
		female: { src: "images/body/f-stalker.png", offsetX: 79, offsetY: 71 }
	},
	staremperor: { 
		male: { src: "images/body/m-staremperor.png", offsetX: 76, offsetY: 71 },
		female: { src: "images/body/f-staremperor.png", offsetX: 76, offsetY: 72 }
	},
	starknight: { 
		male: { src: "images/body/m-starknight.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-starknight.png", offsetX: 76, offsetY: 71 }
	},
	summer1: { 
		male: { src: "images/body/m-summer1.png", offsetX: 80, offsetY: 72 },
		female: { src: "images/body/f-summer1.png", offsetX: 81, offsetY: 73 }
	},
	summer2: { 
		male: { src: "images/body/m-summer2.png", offsetX: 80, offsetY: 72 },
		female: { src: "images/body/f-summer2.png", offsetX: 81, offsetY: 72 }
	},
	supernovice: { 
		male: { src: "images/body/m-supernovice.png", offsetX: 78, offsetY: 70 },
		female: { src: "images/body/f-supernovice.png", offsetX: 80, offsetY: 73 }
	},
	swordsman: { 
		male: { src: "images/body/m-swordsman.png", offsetX: 79, offsetY: 71 },
		female: { src: "images/body/f-swordsman.png", offsetX: 84, offsetY: 71 }
	},
	taekwon: { 
		male: { src: "images/body/m-taekwon.png", offsetX: 77, offsetY: 71 },
		female: { src: "images/body/f-taekwon.png", offsetX: 78, offsetY: 71 }
	},
	thief: { 
		male: { src: "images/body/m-thief.png", offsetX: 80, offsetY: 70 },
		female: { src: "images/body/f-thief.png", offsetX: 81, offsetY: 69 }
	},
	artist: { 
		male: { src: "images/body/m-troubador.png", offsetX: 77, offsetY: 70 },
		female: { src: "images/body/f-trouvere.png", offsetX: 77, offsetY: 71 }
	},
	thespian: { 
		male: { src: "images/body/m-maestro.png", offsetX: 77, offsetY: 70 },
		female: { src: "images/body/f-wanderer.png", offsetX: 78, offsetY: 70 }
	},
	thespianAlt: { 
		male: { src: "images/body/m-maestroAlt.png", offsetX: 78, offsetY: 71 },
		female: { src: "images/body/f-wandererAlt.png", offsetX: 76, offsetY: 71 }
	},
	warlock: { 
		male: { src: "images/body/m-warlock.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-warlock.png", offsetX: 79, offsetY: 71 }
	},
	warlockAlt: { 
		male: { src: "images/body/m-warlockAlt.png", offsetX: 71, offsetY: 71 },
		female: { src: "images/body/f-warlockAlt.png", offsetX: 76, offsetY: 71 }
	},
	wedding: { 
		male: { src: "images/body/m-wedding.png", offsetX: 79, offsetY: 72 },
		female: { src: "images/body/f-wedding.png", offsetX: 70, offsetY: 72 }
	},
	windhawk: { 
		male: { src: "images/body/m-windhawk.png", offsetX: 76, offsetY: 70 },
		female: { src: "images/body/f-windhawk.png", offsetX: 77, offsetY: 71 }
	},
	wizard: { 
		male: { src: "images/body/m-wizard.png", offsetX: 77, offsetY: 71 },
		female: { src: "images/body/f-wizard.png", offsetX: 77, offsetY: 68 }
	},
};