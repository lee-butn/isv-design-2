import React from "react";
import styled from "styled-components";

export const BodyRootRootRoot1 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <BodyRootRootRoot>
      <FlexColumn>
        <FlexColumn1>
          <Text1>Consent</Text1>
          <Paragraph>
            To verify your identify as a business owner of [BUSINESSNAME],
            please provide your consent to verify your identification.
          </Paragraph>
          <Paragraph1>
            Do you consent to the upload and identity verification?
          </Paragraph1>
          <WhiteFlexRow>
            <FlexColumn2>
              <IConsent>I consent </IConsent>
              <Paragraph2>
                Selecting this box confirms that you consent to the identity
                verification.
                <br />
                Find out more and check out our privacy policy.
                {"  "}
              </Paragraph2>
            </FlexColumn2>
            <Icon src={`https://file.rendit.io/n/rEtBOiGCLo0E57Gjt97q.svg`} />
          </WhiteFlexRow>
          <FlexRow>
            <Text2>I do not consent</Text2>
            <Icon src={`https://file.rendit.io/n/5fI76v3h8pLZqGh1Kyb7.svg`} />
          </FlexRow>
        </FlexColumn1>
        <FlexRow1>
          <FlexRow2>
            <Ellipse>
              <Ellipse1>
                <Icon2
                  src={`https://file.rendit.io/n/xPVilQW1Olw2JJUBgsEO.svg`}
                />
              </Ellipse1>
            </Ellipse>
            <TimberwolfRectangle />
          </FlexRow2>
          <Button1 onClick={(e) => Button1Function(e, "Button1")}>
            <ReadMore>Confirm</ReadMore>
          </Button1>
        </FlexRow1>
      </FlexColumn>
      <SidebarA>
        <CompanyLogo
          src={`https://file.rendit.io/n/74hWo1H38yvNCDvcoNae.svg`}
        />
      </SidebarA>
    </BodyRootRootRoot>
  );
};

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const BodyRootRootRoot = styled.div`
  gap: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 90px 80px;
`;
const FlexColumn = styled.div`
  height: 707px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 0px 0px 3px 0px;
`;
const FlexColumn1 = styled.div`
  height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
const Text1 = styled.div`
  width: 616px;
  height: 77px;
  margin: 0px 0px 12px 0px;
  color: #252525;
  font-size: 64px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 76.80000305175781px;
  letter-spacing: -2.56px;
`;
const Paragraph = styled.div`
  width: 616px;
  height: 48px;
  margin: 0px 0px 10px 0px;
  color: #505050;
  font-size: 20px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
const Paragraph1 = styled.div`
  width: 438px;
  height: 24px;
  align-self: flex-start;
  margin: 0px 0px 12px 0px;
  color: #252525;
  font-size: 16px;
  font-family: Poppins;
  white-space: nowrap;
`;
const WhiteFlexRow = styled.div`
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 12px 0px;
  padding: 31px 23px;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #505050;
  background-color: #ffffff;
`;
const FlexColumn2 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: stretch;
`;
const IConsent = styled.div`
  width: 484px;
  height: 17px;
  color: #252525;
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 16.80000066757202px;
  white-space: pre-wrap;
`;
const Paragraph2 = styled.div`
  width: 484px;
  height: 36px;
  color: #505050;
  font-size: 12px;
  font-family: Poppins;
  line-height: 18px;
  white-space: pre-wrap;
`;
const FlexRow = styled.div`
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 31px 23px;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #e0e0e0;
`;
const Text2 = styled.div`
  width: 484px;
  height: 17px;
  margin: 3.5px 0px 0px 0px;
  color: #252525;
  font-size: 14px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 16.80000066757202px;
`;
const FlexRow1 = styled.div`
  width: 606px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 0px 0px 10px;
`;
const FlexRow2 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 0px;
`;
const Ellipse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/GhUo3CGXgQ3CZLiwMxf1.svg");
`;
const Ellipse1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 4px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/5PPk9hslCMfLjNe5nlvd.svg");
`;
const Icon2 = styled.img`
  width: 16px;
  height: 16px;
`;
const TimberwolfRectangle = styled.div`
  width: 42px;
  height: 24px;
  border-radius: 18px;
  background-color: #e0e0e0;
`;
const Button1 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  border-width: 0px;
  border-radius: 1px;
  box-sizing: content-box;
  background-color: #1b1b1b;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ReadMore = styled.div`
  width: 49px;
  height: 14px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 14.40000057220459px;
  text-align: center;
  white-space: nowrap;
`;
const SidebarA = styled.div`
  height: 612px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 49px 90px 49px 68px;
  border-radius: 80px 0px;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal, normal;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(https://file.rendit.io/n/wm99ZY4YA5pMGgeztTH9.jpg);
`;
const CompanyLogo = styled.img`
  width: 81px;
  height: 76px;
`;
