import useFetchQuestionList from './useFetchQuestionList';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionNavigation } from '../../types/question';

const useQuestionNavigation = (subjectId: number, currQuestionId: number) => {
  const navigate = useNavigate();
  const { content, hasNextPage, fetchNextPage, isLoading } =
    useFetchQuestionList({
      subjectId: subjectId,
      size: 10,
    });

  const [status, setStatus] = useState<QuestionNavigation>({
    index: 0,
    hasNext: false,
    hasPrev: false,
  });

  useEffect(() => {
    if (!isLoading) {
      const index = content.indexOf(
        content.filter((question) => question.id === currQuestionId)[0],
      );
      const hasNext = hasNextPage || index < content.length - 1;
      const hasPrev = index > 0;

      if (index === content.length - 1 && hasNext) {
        fetchNextPage();
      }

      setStatus({
        index,
        hasNext,
        hasPrev,
      });
    }
  }, [
    content,
    setStatus,
    currQuestionId,
    isLoading,
    hasNextPage,
    fetchNextPage,
  ]);

  const goToNextQuestion = () => {
    navigate(
      `/subjects/${subjectId}/questions/${content[status.index + 1].id}`,
      { replace: true },
    );
  };

  const goToPrevQuestion = () => {
    navigate(
      `/subjects/${subjectId}/questions/${content[status.index - 1].id}`,
      { replace: true },
    );
  };

  return { goToNextQuestion, goToPrevQuestion, status };
};

export default useQuestionNavigation;
