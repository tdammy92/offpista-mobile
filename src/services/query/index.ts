import { useState, useEffect } from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

interface UseFirestoreCollectionOptions<T> {
  enabled?: boolean;
  onSuccess?: (data: T[]) => void;
  onError?: (error: Error) => void;
}

interface UseFirestoreCollectionResult<T> {
  data: T[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export const useFirestoreCollection = <T = FirebaseFirestoreTypes.DocumentData>(
  collectionName: string,
  options: UseFirestoreCollectionOptions<T> = {},
): UseFirestoreCollectionResult<T & { id: string }> => {
  const { enabled = true, onSuccess, onError } = options;

  const [data, setData] = useState<(T & { id: string })[]>([]);
  const [isLoading, setIsLoading] = useState(enabled);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    if (!collectionName) {
      setIsError(true);
      setError(new Error('Collection name is required'));
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      const querySnapshot = await firestore().collection(collectionName).get();

      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as T),
      })) as (T & { id: string })[];

      setData(documents);

      if (onSuccess) {
        onSuccess(documents);
      }
    } catch (err) {
      const errorObj =
        err instanceof Error ? err : new Error('An unknown error occurred');
      setIsError(true);
      setError(errorObj);

      if (onError) {
        onError(errorObj);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [collectionName, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchData,
  };
};
