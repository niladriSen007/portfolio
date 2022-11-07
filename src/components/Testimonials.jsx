import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>

      <section>
        <TestimonialCard
        img={"https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/103481742_1412214929166110_8383604039871301261_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=dqWkv8wXM14AX-JsoAD&tn=c1GW4tgPP8mRjycR&_nc_ht=scontent.fccu3-1.fna&oh=00_AfCX1SInkh77McvF4nfKhF2CYSJy_CfEzST3UqPr1CXXSQ&oe=638F8A38"}
          name={"Paramita"}
          feedback={"Your Teaching skills are so good. Thank you."}
        />

        <TestimonialCard
        img={"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/310098225_2835437843257637_8110405678547736401_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0ZrQmMxyeEwAX-ZY_Dq&_nc_ht=scontent.fccu3-1.fna&oh=00_AfB-iPcuTly5i-i2s1AjyLwOU6YjXRwMR5NLgxcw6WqTug&oe=636C16C7"}
          name={"James"}
          feedback={
            "Wow what a portfolio, doesn't expected this!"
          }
        />

        <TestimonialCard
        img={"https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/311914093_1265897897543584_3180172914976895055_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6LLcy3FfTUAAX8HAP0y&_nc_ht=scontent.fccu3-1.fna&oh=00_AfAOle9cYhY_8n-h7di_rSnLXp6DrwYN3TpniSafIcrU-A&oe=636DC128"}
          name={"Swarnadip"}
          feedback={"He has in depth knowledge of JS and react and the plus point is he always wants to learn new things."}
        />

{/* <TestimonialCard
        img={"https://randomuser.me/api/portraits/men/32.jpg"}
          name={"John"}
          feedback={"Amazing seems like you should the Google CEO"}
        />

<TestimonialCard
        img={"https://randomuser.me/api/portraits/women/79.jpg"}
          name={"Scarlett"}
          feedback={"Amazing seems like you should the Google CEO"}
        />

<TestimonialCard
        img={"https://images.unsplash.com/photo-1496081081095-d32308dd6206?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=dd302358c7e18c27c4086e97caf85781"}
          name={"Simmy"}
          feedback={"Amazing seems like you should the Google CEO"}
        /> */}
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback,img }) => (
  <article>
    <img
      src={img}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonials;