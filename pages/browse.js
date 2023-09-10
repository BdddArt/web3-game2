
import styles from "../styles/Home.module.css";
import Authentication from "../components/Authentication";
import Head from "next/head";
import {
    Box, Button,
    Heading,
    SimpleGrid,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    Text
} from "@chakra-ui/react";
import {faker} from '@faker-js/faker'
import {useEffect, useState} from "react";
export default function Browse(props) {
    const { isAuth, role } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        const songs = new Array(100).fill().map(() => ({
            song: faker.music.songName(),
            genre: faker.music.genre(),
        }));
        setData(songs);
    }, []);

    return(
        <div className={styles.container}>
            <Authentication isAuth={isAuth} />
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Box padding={4}>
                    <Heading>Select Song</Heading>
                    <Box overflowY="auto" maxHeight="500px" className={"max-w-4xl"}>
                        <Table variant="striped" colorScheme="teal">
                            <Thead position="sticky" top={0} bgColor="grey" zIndex={1}>
                                <Tr>
                                    <Th>Song Name</Th>
                                    <Th>Genre</Th>
                                    <Th>Play</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map(({song, genre }) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <Tr _hover={{ transform: "scale(1.05)" ,boxShadow: "base"}}
                                        transition="all 0.2s ease-out"
                                        overflow="hidden">
                                        <Td>{song}</Td>
                                        <Td>{genre}</Td>
                                        <Td><Button></Button></Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </main>
        </div>)
}