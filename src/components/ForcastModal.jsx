import { Box, Grid, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { dateFormat } from "../helpers/extraFunctions";
import { NewText } from "./SmallComponents";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";


export const ForcastModal = ({ data }) => {

    const { date, day } = dateFormat(data.dt);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box onClick={onOpen} cursor={'pointer'} mt={'10px'}>
                <Text color={'#5e82f4'} fontWeight={500} fontSize={'27px'}>
                    <Icon as={ImSun} /> {Math.round(data.temp.day)}<sup>o</sup> C
                </Text>
                <Text color={'#5e82f4'} fontWeight={500} fontSize={'27px'}>
                    <Icon as={MdOutlineNightsStay} /> {Math.round(data.temp.night)}<sup>o</sup> C
                </Text>
                <Text color={'#5e82f4'} fontWeight={500} fontSize={'20px'}>
                    {data.weather[0].main}
                </Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Box p={'10px'}>
                            <Box p={'5px'} bg={'#5e82f4'} textAlign={'center'} borderRadius={'30px'} mb={'20px'} >
                                <Text fontWeight={500} color={'white'} fontSize={'18px'}>{date}</Text>
                                <Text fontWeight={500} color={'white'} fontSize={'18px'}>{day}</Text>
                            </Box>

                            <Grid templateColumns={'50% 50%'} >
                                <Box pb={'10px'} pl={'15%'}>
                                    {['Felt Temp.', 'Humidity', 'Wind', 'Pressure', 'Day Temp.', 'Evening Temp.', 'Night Temp.', 'Max Temp.', 'Min Temp.'].map((e, i) => (
                                        <Text key={i} color={'#5e82f4'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                    ))}
                                </Box>
                                <Box borderRadius={'30px'} bg={'#5e82f4'} pb={'10px'} pl={'15%'}>
                                    <NewText>{data.feels_like.day}<sup>o</sup> C</NewText>
                                    <NewText>{data.humidity}%</NewText>
                                    <NewText>{(data.wind_speed * 3.6).toFixed(2)} Km/h</NewText>
                                    <NewText>{data.pressure} hPa</NewText>
                                    <NewText>{data.temp.day}<sup>o</sup> C</NewText>
                                    <NewText>{data.temp.eve}<sup>o</sup> C</NewText>
                                    <NewText>{data.temp.night}<sup>o</sup> C</NewText>
                                    <NewText>{data.temp.min}<sup>o</sup> C</NewText>
                                    <NewText>{data.temp.max}<sup>o</sup> C</NewText>
                                </Box>
                            </Grid>
                        </Box>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

