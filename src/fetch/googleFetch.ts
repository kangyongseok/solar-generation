export async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data;
}
