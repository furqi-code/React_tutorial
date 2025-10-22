'use client'
export default async function CustomUserPage({ params }) {
  const { userName } = await params;
  return (
    <>
      <h1>{userName}</h1>
    </>
  );
}