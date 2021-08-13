function jsonToXml(json) {
    return `<?xml version="1.0" ?>
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header>
    <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <ds:SignedInfo>
    <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"></ds:CanonicalizationMethod>
    <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gost34310-gost34311"></ds:SignatureMethod>
    <ds:Reference URI="#id-e3481dc5-ba23-4d46-a412-4da401305ffb">
    <ds:Transforms>
    <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"></ds:Transform>
    </ds:Transforms>
    <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#gost34311"></ds:DigestMethod>
    <ds:DigestValue>Y+A7tfLkhARE7DFwQ+T2IsLD7TofVMwGCbGRn5yt28A=</ds:DigestValue>
    </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue>
    MPJpqaQ6WnsdUS72vesWPozWEvwGscJDMq3tcNoyOqe+ae6IWqSGxbgOqD6EdoQdmUzHRMSWaquQ
    lJaT2IQxhg==
    </ds:SignatureValue>
    <ds:KeyInfo>
    <wsse:SecurityTokenReference>
    <wsse:KeyIdentifier EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3">
    ${json.token}
    </wsse:KeyIdentifier>
    </wsse:SecurityTokenReference>
    </ds:KeyInfo>
    </ds:Signature></wsse:Security></SOAP-ENV:Header>
    <S:Body xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" wsu:Id="id-e3481dc5-ba23-4d46-a412-4da401305ffb"><ns2:sendMessage xmlns:ns2="http://bip.bee.kz/AsyncChannel/v10/Types">
    <request xmlns="">
    <messageInfo>
    <messageId>${json.messageId}</messageId>
    <correlationId>${json.correlationId}</correlationId>
    <serviceId>${json.serviceId}</serviceId>
    <messageType>${json.messageType}</messageType>
    <messageDate>${json.messageDate}</messageDate>
    <sender>
        <senderId>${json.senderId}</senderId>
        <password>${json.password}</password>
    </sender>
    </messageInfo>
    <messageData>
    <data xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">&lt;?xml version="1.0" encoding="UTF-8" standalone="yes"?&gt;
    &lt;responseMessage xmlns:ns2="http://www.w3.org/2000/09/xmldsig#" xmlns:ns3="http://newshep.get_app_ZU_egov_Aktobe.egov.kz"&gt;
        &lt;ns3:SystemInfo&gt;
            &lt;ns3:RequestNumber&gt;10000000000000007519&lt;/ns3:RequestNumber&gt;
            &lt;ns3:ChainId&gt;10000000000000007519&lt;/ns3:ChainId&gt;
            &lt;ns3:RequestDate&gt;2020-07-23T16:27:50.913+06:00&lt;/ns3:RequestDate&gt;
        &lt;/ns3:SystemInfo&gt;
        &lt;ns3:ResponseData&gt;
            &lt;ns3:RequestNumber&gt;request number here&lt;/ns3:RequestNumber&gt;
            &lt;ns3:CurrentStatus&gt;010&lt;/ns3:CurrentStatus&gt;
            &lt;ns3:FirstStepResponse&gt;
                &lt;ns3:Act&gt;
                    &lt;ns3:CodeType&gt;ZKR4&lt;/ns3:CodeType&gt;
                    &lt;ns3:FileName&gt;Акт выбора окончательные либо отказ.pdf&lt;/ns3:FileName&gt;
                    &lt;ns3:FileId&gt;00000000-0000-7071-6571-dc6e265c080b&lt;/ns3:FileId&gt;
                    &lt;ns3:DocNumber&gt;115&lt;/ns3:DocNumber&gt;
                    &lt;ns3:DocDate&gt;2020-07-23+06:00&lt;/ns3:DocDate&gt;
                    &lt;ns3:FileType&gt;ActReconcilation_or_RefuseAct&lt;/ns3:FileType&gt;
                &lt;/ns3:Act&gt;
            &lt;/ns3:FirstStepResponse&gt;
        &lt;/ns3:ResponseData&gt;
    &lt;/responseMessage&gt;
    </data>
    </messageData>
    </request>
    </ns2:sendMessage>
    </S:Body>
    </S:Envelope>`
}

module.exports = jsonToXml
