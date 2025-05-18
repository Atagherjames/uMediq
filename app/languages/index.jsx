import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import IconHeader from "../../shared/IconHeader/IconHeader";
import { useRouter } from "expo-router";
const languages = ["English", "Hindi", "Tamil", "Telugu", "Malayalam"];

const LanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const router = useRouter();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageButton,
        selectedLanguage === item && styles.selectedButton,
      ]}
      onPress={() => handleLanguageSelect(item)}
    >
      <Text
        style={[
          styles.languageText,
          selectedLanguage === item && styles.selectedText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <IconHeader
        title={"Languages"}
        iconSize={24}
        onBackPress={() => router.back()}
      />
      <View style={styles.container}>
        <FlatList
          data={languages}
          renderItem={renderLanguageItem}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ScreenWrapper>
  );
};

export default LanguageScreen;
