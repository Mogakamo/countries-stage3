import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
  FlatList,
  
} from "react-native";
import React, { FC, useState, useRef, ReactElement } from "react";
import { ChevronDownIcon } from "react-native-heroicons/outline";

interface DropdownProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: FC<DropdownProps> = ({ label, data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const DropDownButton = useRef();

  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropDownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h)
    })
    setVisible(true)
  }

  const renderItem = ({item}: ReactElement<any, any>) => {
    <View>
      <Text>{item.label}</Text>
    </View>
  }

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity onPress={() => setVisible(false)}>
          <View className="bg-white w-[100%] shadow-md">
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View className="">
      <View className="flex-row w-[100%] justify-between items-center">
        <Text className="text-[16px] font-bold">{label}</Text>
        <TouchableHighlight ref={DropDownButton} onPress={toggleDropdown}>
          <ChevronDownIcon color="black" size={15} />
        </TouchableHighlight>
      </View>
      <View>{renderDropdown()}</View>
    </View>
  );
};

export default Dropdown;
