import { App } from "antd"
import React, { useState } from "react"
import styled from "styled-components";
import { ARTEM_ROUTE, GENA_ROUTE, OLEG_ROUTE, VLAD_ROUTE, PDF_ROUTE } from "../../app/routing/config";
import { Link } from "react-router-dom";
import { pdf } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


interface ??? {
    ???
}

const  MyDocument: FC<???> = ({ name, picture }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} wrap>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>{name}</Text>
                </View>

                <View style={styles.section}>
                    {picture && <Image src={picture} />}
                    </View>
            </Page>
        </Document>
    )
}

export default pdf