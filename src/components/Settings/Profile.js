import React from "react";
import styled from "styled-components";
import Alert from "../Alert";
import { ReactComponent as LoadingIcon } from "../../assets/icons/LoadingIcon.svg";
import { GET_PROFILE } from "../../pages/api/SettingsQueries";
import { useQuery } from "@apollo/client";
import Avatar from "../../assets/images/Avatar.png";
import Badge from "../Badge";
import Moment from "react-moment";

const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (loading)
    return (
      <Alert>
        <LoadingIcon width={"32px"} />
        <h5>Loading, please wait...</h5>
      </Alert>
    );
  if (error)
    return (
      <Alert>
        <h4>An error occured {error.message}</h4>
      </Alert>
    );
  return (
    <MainWrapper>
      <ProfileCard>
        <img src={Avatar} width={"80px"} alt="profilePicture"></img>
        <ProfileTitle>{data.profile.fullName}</ProfileTitle>
        <FlexWrapper>
          <Badge color="secondary">{data.profile.email}</Badge>
          <Badge color="tertiary">{data.profile.type}</Badge>
        </FlexWrapper>
        <Divider />
        <ProfileSubTitle>
          {"Created Date: "}
          <Moment format="D MMM, YYYY">{data.profile.createdDate}</Moment>
        </ProfileSubTitle>
        <ProfileSubTitle>
          {"Updated at: "}
          <Moment format="D MMM, YYYY">{data.profile.updatedAt}</Moment>
        </ProfileSubTitle>
      </ProfileCard>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Divider = styled.hr`
  width: 100%;
  color: ${(props) => props.theme.neutral1};
`;
const FlexWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    gap: 10px;
    &,
    & > * {
      font-size: small;
    }
  }
  justify-content: space-between;
`;
const ProfileTitle = styled.h3`
  color: white;
  font-weight: 600;
  font-size: x-large;
  letter-spacing: 0.75px;
`;
const ProfileSubTitle = styled.h5`
  color: white;
  color: ${(props) => props.theme.neutral1};
  font-weight: 600;
  font-size: large;
  letter-spacing: 0.75px;
`;
const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  row-gap: 16px;
  max-width: 800px;
  width: 100%;
  background-color: ${(props) => props.theme.bgLight};
  border-radius: 12px;
  padding: 32px;
  img {
    margin: 0 auto;
  }
`;
export default Profile;
