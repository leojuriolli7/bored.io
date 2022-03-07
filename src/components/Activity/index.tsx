import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface ActivityInterface {
  activity: string;
  participants: string;
  type: string;
  link: string;
}

export function Activity() {
  const [activity, setActivity] = useState<ActivityInterface>(
    {} as ActivityInterface
  );
  const [imgType, setImgType] = useState("");
  const [loading, setLoading] = useState(true);

  const getActivity = () => {
    api.get("activity").then((response) => {
      setActivity(response.data);
      setImgType(activity.type);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    api.get("activity").then((response) => {
      setImgType(response.data.type);
      setActivity(response.data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomizeActivity = () => {
    setLoading(true);
    getActivity();
  };
  return (
    <>
      <S.Container>
        <S.Content>
          <S.ActivityName>{activity.activity}</S.ActivityName>
          <S.Description>
            <S.TypeText>Type: {imgType}</S.TypeText>
            <S.ParticipantsText>
              Participants: {activity.participants}
            </S.ParticipantsText>
            {activity.link !== "" && (
              <S.LearnMoreLink
                href={activity.link}
                target={"_blank"}
                rel="noreferrer"
              >
                Learn More
              </S.LearnMoreLink>
            )}
          </S.Description>
        </S.Content>
        {loading && (
          <Spinner animation="border" variant="secondary" size="sm" />
        )}
      </S.Container>

      <S.Button onClick={randomizeActivity} disabled={loading}>
        Go again
      </S.Button>
    </>
  );
}
