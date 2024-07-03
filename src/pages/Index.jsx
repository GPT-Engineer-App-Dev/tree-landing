import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Tree World</h1>
          <p className="mt-4 text-xl">Discover the beauty and importance of trees</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>About Trees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/placeholder.svg" alt="Tree" className="mx-auto object-cover w-full h-[200px] md:w-1/2 md:h-[300px]" />
              <div className="mt-4 md:mt-0 md:ml-6">
                <p>Trees are vital to our environment. They provide oxygen, improve air quality, conserve water, preserve soil, and support wildlife. Trees also offer social and economic benefits, making them an essential part of our lives.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Types of Trees Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Types of Trees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="Tree Type 1" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2">Tree Type 1</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="Tree Type 2" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2">Tree Type 2</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="Tree Type 3" className="mx-auto object-cover w-full h-[200px]" />
                <p className="mt-2">Tree Type 3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Benefits of Trees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="Benefit 1" className="mx-auto object-cover w-full h-[100px]" />
                <p className="mt-2">Environmental Benefits</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="Benefit 2" className="mx-auto object-cover w-full h-[100px]" />
                <p className="mt-2">Health Benefits</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/placeholder.svg" alt="Benefit 3" className="mx-auto object-cover w-full h-[100px]" />
                <p className="mt-2">Economic Benefits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your Message" />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 text-center">
        <p>&copy; 2023 Tree World. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;