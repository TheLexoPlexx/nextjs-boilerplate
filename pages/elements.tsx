import type { NextPage } from 'next'
import Image from "next/image"

import { MdArrowDownward, MdBackpack, MdCheck, MdDownload, MdExpandMore, MdFacebook, MdHandyman, MdKeyboard, MdPages, MdSearch } from "react-icons/md"

import pic01 from '../public/pic01.jpg'
import pic02 from '../public/pic02.jpg'

const Home: NextPage = () => {
  return (
    <div className="container">
        <h2 id="elements">Elements</h2>
        <div className="row">
          <div className="6u 12u$(medium)">

              <h3>Text</h3>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
              This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>for (;;) </code>.
              Finally, this is a <a href="#">link</a>.</p>
              <hr />
              <h1>Heading Level 1</h1>
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
              <header>
                <h2>Heading with a Subtitle</h2>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <header>
                <h3>Heading with a Subtitle</h3>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <header>
                <h4>Heading with a Subtitle</h4>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

              <h3>Lists</h3>
              <div className="row">
                <div className="6u 12u$(small)">

                  <h4>Unordered</h4>
                  <ul>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>

                  <h4>Alternate</h4>
                  <ul className="alt">
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>

                </div>
                <div className="6u$ 12u$(small)">

                  <h4>Ordered</h4>
                  <ol>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Etiam vel felis at lorem sed viverra.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Etiam vel felis at lorem sed viverra.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ol>

                  <h4>Icons</h4>
                  <ul className="icons">
                    <li><MdPages /></li>
                    <li><MdHandyman /></li>
                    <li><MdKeyboard /></li>
                    <li><MdBackpack /></li>
                    <li><MdFacebook /></li>
                  </ul>

                </div>
              </div>
              <h4>Definition</h4>
              <dl>
                <dt>Item 1</dt>
                <dd>
                  <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                </dd>
                <dt>Item 2</dt>
                <dd>
                  <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                </dd>
                <dt>Item 3</dt>
                <dd>
                  <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
                </dd>
              </dl>

              <h4>Actions</h4>
              <ul className="actions">
                <li><a href="#" className="button special">Default</a></li>
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button alt">Default</a></li>
              </ul>
              <ul className="actions small">
                <li><a href="#" className="button special">Small</a></li>
                <li><a href="#" className="button">Small</a></li>
                <li><a href="#" className="button alt">Small</a></li>
              </ul>
              <div className="row">
                <div className="3u 12u$(small)">
                  <ul className="actions vertical">
                    <li><a href="#" className="button special">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                    <li><a href="#" className="button alt">Default</a></li>
                  </ul>
                </div>
                <div className="3u 12u$(small)">
                  <ul className="actions vertical small">
                    <li><a href="#" className="button special">Small</a></li>
                    <li><a href="#" className="button">Small</a></li>
                    <li><a href="#" className="button alt">Small</a></li>
                  </ul>
                </div>
                <div className="3u 12u$(small)">
                  <ul className="actions vertical">
                    <li><a href="#" className="button special">Default</a></li>
                    <li><a href="#" className="button">Default</a></li>
                    <li><a href="#" className="button alt">Default</a></li>
                  </ul>
                </div>
                <div className="3u$ 12u$(small)">
                  <ul className="actions vertical small">
                    <li><a href="#" className="button special">Small</a></li>
                    <li><a href="#" className="button">Small</a></li>
                    <li><a href="#" className="button alt">Small</a></li>
                  </ul>
                </div>
              </div>

              <h3>Blockquote</h3>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis.</blockquote>

              <h3>Table</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item 1</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item 2</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item 3</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item 4</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item 5</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

          </div>
          <div className="6u$ 12u$(medium)">

              <h3>Buttons</h3>
              <ul className="actions">
                <li><a href="#" className="button special">Special</a></li>
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button alt">Alternate</a></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button special big">Big</a></li>
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button alt small">Small</a></li>
              </ul>
              <ul className="actions fit">
                <li><a href="#" className="button special fit">Fit</a></li>
                <li><a href="#" className="button fit">Fit</a></li>
                <li><a href="#" className="button alt fit">Fit</a></li>
              </ul>
              <ul className="actions fit small">
                <li><button className="button special fit small">Fit + Small</button></li>
                <li><button className="button fit small">Fit + Small</button></li>
                <li><button className="button alt fit small">Fit + Small</button></li>
              </ul>
              <ul className="actions">
                <li><a href="#" className="button special icon"><MdSearch />Icon</a></li>
                <li><a href="#" className="button icon"><MdDownload />Icon</a></li>
                <li><a href="#" className="button alt icon"><MdCheck />Icon</a></li>
              </ul>
              <ul className="actions">
                <li><button className="special disabled">Special</button></li>
                <li><button className="button disabled">Default</button></li>
                <li><button className="button alt disabled">Alternate</button></li>
              </ul>

              <h3>Form</h3>

              <form method="post" action="#">
                <div className="row uniform">
                  <div className="6u 12u$(xsmall)">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="6u$ 12u$(xsmall)">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>

                  <div className="12u$">
                    <MdExpandMore />
                    <select name="category" id="category">
                      <option selected disabled hidden>Select...</option>
                      <option>Manufacturing</option>
                      <option>Shipping</option>
                      <option>Administration</option>
                      <option>Human Resources</option>
                    </select>
                  </div>

                  <div className="4u 12u$(small)">
                    <input type="radio" id="priority-low" name="priority" />
                    <label htmlFor="priority-low">Low Priority</label>
                  </div>
                  <div className="4u 12u$(small)">
                    <input type="radio" id="priority-normal" name="priority" />
                    <label htmlFor="priority-normal">Normal Priority</label>
                  </div>
                  <div className="4u$ 12u$(small)">
                    <input type="radio" id="priority-high" name="priority" />
                    <label htmlFor="priority-high">High Priority</label>
                  </div>

                  <div className="6u 12u$(small)">
                    <input type="checkbox" id="copy" name="copy" />
                    <label htmlFor="copy">Email me a copy of this message</label>
                  </div>
                  <div className="6u$ 12u$(small)">
                    <input type="checkbox" id="human" name="human" />
                    <label htmlFor="human">I am a human and not a robot</label>
                  </div>

                  <div className="12u$">
                    <textarea name="message" id="message" placeholder="Enter your message" rows={6}></textarea>
                  </div>

                  <div className="12u$">
                    <ul className="actions">
                      <li><button type="submit">Send Message</button></li>
                      <li><button type="reset" className="alt">Reset</button></li>
                    </ul>
                  </div>
                </div>
              </form>

              <hr />

              <form method="post" action="#">
                <div className="row uniform">
                  <div className="9u 12u$(small)">
                    <input type="text" name="query" id="query" placeholder="Query" />
                  </div>
                  <div className="3u$ 12u$(small)">
                    <button type="submit" className="fit">Search</button>
                  </div>
                </div>
              </form>

              <h3>Image</h3>

              <h4>Fit</h4>
              <Image src={pic01} layout="responsive" className='image' />

              <h4>Left &amp; Right</h4>
              <p><span className="img-left">
                <Image src={pic02} />
                </span>
              Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis volutpat lorem ipsum dolor sit amet dolor consequat.</p>
              <p>
                <span className="img-right">
                <Image src={pic02} />
                </span>
                Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis volutpat lorem ipsum dolor sit amet dolor consequat.</p>

              <h3>Preformatted</h3>
              <pre><code>i = 0;

print 'It took ' + i + ' iterations to sort the deck.';
</code></pre>

          </div>
        </div>
    </div>
  )
}

export default Home