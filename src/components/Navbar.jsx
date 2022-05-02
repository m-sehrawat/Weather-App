import { Box, Button, Center, Flex, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity } from "../redux/actions";

export const Navbar = () => {

    const [city, setCity] = useState("");
    console.log('city:', city)

    const dispatch = useDispatch();
    const toast = useToast();

    const handleChnage = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    return (
        <Flex h={'70px'} bg={'#d7defa'} justifyContent={'center'}>
            <Center px={'10px'}>
                <Input
                    onKeyPress={({ key }) => { key === "Enter" ? handleChnage() : undefined }}
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'white'}
                    _focus={{ 'border': 'none' }}
                    placeholder="City"
                />
                <Button
                    onClick={handleChnage}
                    borderRadius={'0px 15px 15px 0px'}
                    color={'white'}
                    bg={'#5e82f4'}
                    _hover={{ 'bg': '5e82f4' }}
                >
                    Search
                </Button>
            </Center>
        </Flex>
    );
};